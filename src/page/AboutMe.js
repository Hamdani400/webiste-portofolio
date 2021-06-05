import React, {Component} from 'react';
import Header from 'parts/Header';

export default class AboutMe extends Component {
  render () {
    return (
      <div className="about-me">
        <Header {...this.props} />
        <section className="container dp-flex">
          <div className="info-wrapper">
            <div className="row">
              <div className="col-4 photo">
                This place for photo
              </div>
              <div className="col">
                <article>
                  <strong><p>About me</p></strong>
                  <p className="self-description">
                    Hi, I’m Dani <br />
                    I’m final year student of Jember University, majoring in Electrical
                    Engineering. Currently working in TukangKonten.com as part time article
                    content writer. Besides that, I also working on my individual projects
                    websites which you can check them in my github account.
                    <br /> <br />
                    Im passionate on programming and keep learning about it in the last a
                    year. I have good skills on HTML, CSS, and Javascript. I also able to use
                    some framework such as RectJS and Bootstrap.
                  </p>
                </article>
                <div className="row">
                  <article>
                    <strong>Technicall Skill</strong>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
