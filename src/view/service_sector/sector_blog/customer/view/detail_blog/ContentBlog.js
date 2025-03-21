import React, { Component } from "react";
import HeaderDetailBlog from "../../component/sub_layout/detail_blog/header_blog/HeaderDetailBlog";

class ContentBlog extends Component {
  render() {
    let s = "";
    return (
      <>
        <HeaderDetailBlog />
        <div class="blog-page-section section">
          <div class="container w-container">
            <div class="blog-post-page-content">
              <div class="rich-text-block w-richtext">
                <blockquote>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                  velit dui, fermentum id facilisis sit amet, imperdiet ut est.
                  Curabitur efficitur viverra nunc, et dignissim justo sodales ut.
                  Mauris facilisis sit amet justo at rutrum.&nbsp;
                </blockquote>
                <p>
                  Curabitur porttitor fringilla nunc ut pretium. Phasellus a
                  hendrerit ipsum. Nullam fringilla vitae dolor vel bibendum. Donec
                  tempus dolor urna, pretium finibus sem congue et. Sed et vulputate
                  felis, sit amet facilisis orci. Ut vestibulum tristique lacinia.
                  Duis nec convallis nisl.
                </p>
                <p>
                  Sed enim massa, volutpat id aliquam consectetur, consequat ut
                  magna. Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. In hac habitasse platea dictumst.
                  Praesent pharetra iaculis leo. Suspendisse ultrices orci leo, id
                  euismod risus mattis vel. Praesent non eleifend nulla, id tempus
                  neque. Maecenas iaculis vestibulum nunc, ut imperdiet metus congue
                  sit amet. Sed placerat, risus at scelerisque congue, mi diam
                  dignissim quam, quis commodo mi magna vel augue.
                </p>
                <h2>Pellentesque habitant morbi</h2>
                <p>
                  Tristique senectus et netus et malesuada fames ac turpis egestas.
                  Aliquam dolor nibh, lobortis sit amet tortor et, luctus lacinia
                  nisi. Nulla vitae arcu purus. Donec mattis arcu at vulputate
                  tincidunt. Cras ut vulputate turpis. Sed sit amet ante leo. Mauris
                  commodo sed nisi ut auctor. Curabitur nunc metus, aliquet et
                  laoreet quis, elementum et nunc. Maecenas feugiat mollis urna quis
                  sollicitudin. Vestibulum lobortis egestas risus, eget eleifend
                  sapien scelerisque quis. Aliquam erat volutpat. Sed ut sapien id
                  urna sagittis gravida vitae nec enim.
                </p>
                <p>
                  Curabitur vestibulum magna eget ex imperdiet sollicitudin. Etiam
                  lacinia, lacus sed fringilla pulvinar, turpis turpis aliquet sem,
                  et blandit turpis purus non massa. Nullam pulvinar ipsum lobortis
                  gravida scelerisque. Nullam pretium elit eros, nec pretium magna
                  faucibus nec. Vivamus a arcu ac nisl tempus auctor. In
                  pellentesque urna a libero porta accumsan. In hac habitasse platea
                  dictumst. Etiam vitae turpis fermentum felis elementum luctus. Ut
                  nec ante tellus. Maecenas bibendum pellentesque dolor, ac
                  malesuada arcu pellentesque nec.&nbsp;
                </p>
                <h2>Cras ut neque libero</h2>
                <p>
                  Nullam efficitur mauris sit amet ligula vehicula auctor. Morbi
                  hendrerit ultricies lacus, ut viverra mi egestas sollicitudin.
                  Phasellus facilisis nisl nec posuere tincidunt. Nullam maximus,
                  ipsum a euismod pharetra, magna turpis condimentum arcu, vitae
                  finibus ante ligula non elit.
                </p>
              </div>
              <div class="single-post-author-block w-clearfix">
                <div class="post-author-line"></div>
                <img
                  class="post-author-photo"
                  src="https://daks2k3a4ib2z.cloudfront.net/577a18541a78df7357099c0c/577a18a61a78df7357099c1b_Testimonial-10.jpg"
                />
                <div class="post-author-name">Peter Johnson</div>
                <div class="description post-author-name">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et
                  metus erat.
                </div>
              </div>
            </div>
            <div class="section-title-wrapper">
              <h2 class="dont-miss section-title">Don't miss these stories:</h2>
            </div>
            <div class="blog-posts-list-wrapper w-dyn-list">
              <div class="blog-posts-list related w-clearfix w-dyn-items w-row">
                <div class="related simple-blog-post-item w-col w-col-4 w-dyn-item">
                  <a
                    class="simple-blog-image-block w-inline-block"
                    href="/blog/why-your-design-process-should-start-with-content"
                    style={{backgroundImage: "url('https://daks2k3a4ib2z.cloudfront.net/577a18541a78df7357099c0c/577a5d443dcedd7133c0ec61_Photo-6.jpg')"}}
                    ><div class="blog-post-overlay light"></div
                  ></a>
                  <div class="blog-post-content">
                    <div class="blog-post-date">July 4, 2016</div>
                    <a
                      class="blog-post-title-link"
                      href="/blog/why-your-design-process-should-start-with-content"
                      >Why your design process should start with content</a
                    >
                    <p class="blog-post-summary">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aenean velit dui, fermentum id facilisis sit amet, imperdiet
                      ut est.
                    </p>
                  </div>
                </div>
                <div class="related simple-blog-post-item w-col w-col-4 w-dyn-item">
                  <a
                    class="simple-blog-image-block w-inline-block"
                    href="/blog/how-to-show-and-hide-content-with-webflow-click-interactions-copy"
                    style={{backgroundImage: "url('https://daks2k3a4ib2z.cloudfront.net/577a18541a78df7357099c0c/577a5d4b3dcedd7133c0ec63_Photo-5.jpg')"}}
                    ><div class="blog-post-overlay light"></div
                  ></a>
                  <div class="blog-post-content">
                    <div class="blog-post-date">July 4, 2016</div>
                    <a
                      class="blog-post-title-link"
                      href="/blog/how-to-show-and-hide-content-with-webflow-click-interactions-copy"
                      >How to show and hide content with Webflow click
                      interactions</a
                    >
                    <p class="blog-post-summary">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aenean velit dui, fermentum id facilisis sit amet, imperdiet
                      ut est.
                    </p>
                  </div>
                </div>
                <div class="related simple-blog-post-item w-col w-col-4 w-dyn-item">
                  <a
                    class="simple-blog-image-block w-inline-block"
                    href="/blog/writing-funny-how-to-improve-your-website-ux-with-humor"
                    style={{backgroundImage: "url('https://daks2k3a4ib2z.cloudfront.net/577a18541a78df7357099c0c/577a1ca0f4bb5c585737a1b4_Photo-3.jpg')"}}
                    ><div class="blog-post-overlay light"></div
                  ></a>
                  <div class="blog-post-content">
                    <div class="blog-post-date">July 4, 2016</div>
                    <a
                      class="blog-post-title-link"
                      href="/blog/writing-funny-how-to-improve-your-website-ux-with-humor"
                      >Writing funny: how to improve your website UX with humor</a
                    >
                    <p class="blog-post-summary">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aenean velit dui, fermentum id facilisis sit amet, imperdiet
                      ut est.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
      </>
    );
  }
}
export default ContentBlog;
