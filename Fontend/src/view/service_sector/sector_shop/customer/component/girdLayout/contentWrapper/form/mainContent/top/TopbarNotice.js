import React, { Component } from "react";
import { urlapi } from "../../../../../../../../../../setting/store/const";
class TopbarNotice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      codes: [],
    };
  }
  componentDidMount = () => {
    fetch(urlapi + "/api/DiscountEvent/sellectAll/all/all/")
      .then((res) => res.json())
      .then((data) => {
        if (data.status && data.status === "200") {
          this.setState({ codes: data.data });
        }
        console.log("code data :", data);
      })
      .catch((err) => console.error(err));
  };
render() {
    return (
        <div id="topbar">
            <div className="marquee-topbar">
                {this.state.codes?.map((code) => (
                    <div key={code.idEvent} className="item">
                        <a>
                            <p><strong>{code.description}</strong></p>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
}

export default TopbarNotice;
