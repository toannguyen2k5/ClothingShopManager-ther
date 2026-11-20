import Checkout, { calculateMerchandiseSubtotal } from "./Checkout";

describe("calculateMerchandiseSubtotal", () => {
  it("applies a product promotion only up to its quantity limit", () => {
    expect(
      calculateMerchandiseSubtotal([
        { price: 100, quantity: 4, decrease: 0.25, quantityLimit: 2 },
      ])
    ).toBe(350);
  });

  it("ignores invalid promotion rates like the backend", () => {
    expect(
      calculateMerchandiseSubtotal([
        { price: 100, quantity: 2, decrease: 1.5, quantityLimit: 2 },
      ])
    ).toBe(200);
  });
});

describe("Checkout voucher total", () => {
  it("uses the promotion-adjusted subtotal and caps percentage discounts", () => {
    const checkout = new Checkout({
      state_data: {
        user_info: { full_name: "", phone_number: "", id_user: "user-1" },
        data_page: {
          cartItems: [
            { price: 100, quantity: 4, decrease: 0.25, quantityLimit: 2 },
          ],
        },
      },
    });
    checkout.state.vouchers = [
      {
        discountCode: "voucher-1",
        type: "PERCENT",
        discount: 10,
        maxDiscountValue: 30,
      },
    ];
    checkout.state.shippingFee = 50;
    checkout.setState = (nextState) => {
      checkout.state = { ...checkout.state, ...nextState };
    };

    checkout.calculateTotal(checkout.state.cartItems, "voucher-1");

    expect(checkout.state.subTotal).toBe(350);
    expect(checkout.state.discount).toBe(30);
    expect(checkout.state.totalPrice).toBe(370);
  });
});
