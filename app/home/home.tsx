import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

function Session ({ caption, title, description } : { caption? : string, title: string, description: string }) {
    return (
      <div className="dst-session">
          {caption ? <div className="info">{caption}</div> : null}
          <h3>{title}</h3>
          <div className="content">{description}</div>
      </div>
    );
}

export default ({ texts } : { texts: Record<string, Record<string, any>>}) => (
    <>
      <section className="section learning has-text-centered">
          <div className="section dst-dotted-container learning-container primary">
              <div className="columns">
                  <div className="column"></div>
                  <div className="column is-7">
                      <h1>
                          <div>{texts.hero.title}</div>
                      </h1>
                      <p>
                          <span>{texts.hero.subtitle}</span>
                      </p>

                      <div className="go-to-learning is-flex is-justify-content-center">
                        <a className="dst-button primary" href="#sessions">{texts.hero.button}</a>
                      </div>
                   </div>
                  <div className="column"></div>
              </div>
          </div>
      </section>

      <section className="section why">
        <div className="container">
            <div className="columns is-vcentered">
                <div className="column text is-flex is-half">
                    <h2>{texts.intro.title}</h2>
                    <p>{texts.intro.subtitle.p1}</p>
                    <p>{texts.intro.subtitle.p2}</p>
                    <div className="dst-buttons">
                        <a className="dst-button primary" href="#sessions">{texts.intro.button.primary}</a>
                        <a href="https://designtokenses.substack.com" target="_blank" className="dst-button secondary">{texts.intro.button.secondary}</a>
                    </div>
                </div>

                <div className="column is-half is-hidden-mobile">
                    <div className="logos-galaxy desktop"></div>
                </div>

                <div className="column is-half is-hidden-desktop">
                    <div className="logos-galaxy"></div>
                </div>
            </div>
        </div>
      </section>

      <section className="section others-companies">
          <div className="container other-companies-container layout-bg">
              <div className="columns is-flex is-align-items-center is-justify-content-center">
                  <div className="column is-full h2 has-text-centered">
                      <h2>{texts.logos.title}</h2>
                  </div>
              </div>
              <div className="company-logos is-flex is-align-items-center">
                  <div className="logo atlassian">
                  </div>
                  <div className="logo google">
                  </div>
                  <div className="logo zendesk">
                  </div>
                  <div className="logo adobe">
                  </div>
                  <div className="logo salesforce">
                  </div>
                  <div className="logo uber">
                  </div>
              </div>
          </div>
      </section>

      <section id="sessions" className="section sessions">
          <div className="container sessions-container">
              <div className="columns">
                  <div className="column is-two-fifths">
                      <h2>{texts.sessions.title}</h2>

                      <div className="dst-badges">
                          <div className="dst-badge primary">{texts.sessions.tag.one}</div>
                          <div className="dst-badge primary">{texts.sessions.tag.two}</div>
                          <div className="dst-badge primary">{texts.sessions.tag.three}</div>
                          <div className="dst-badge primary">{texts.sessions.tag.four}</div>
                          <div className="dst-badge primary">{texts.sessions.tag.five}</div>
                      </div>
                  </div>
                  <div className="column sessions">
                    {Object.values(texts.sessions.card).map((props, index) => <Session {...props} key={`session-${index}`} />)}
                  </div>
              </div>
          </div>
      </section>

      <section className="section meet-the-teachers">
          <div className="container info-container is-align-items-center is-justify-content-center pa-40">
              <div className="columns">
                  <div className="column has-text-centered">
                      <h2>{texts.teachers.title}</h2>
                  </div>
              </div>
              <div className="columns teachers is-justify-content-center">
                  <div className="column is-two-fifths">
                      <div className="teacher-box is-hidden-mobile">
                          <div className="avatar pfer"></div>
                          <div>
                              <div className="name">{texts.teachers.one.name}</div>
                              <div className="job-title">{texts.teachers.one.position}</div>
                          </div>
                          <a href="https://www.linkedin.com/in/pffranco/" target="_blank" className="cta"></a>
                      </div>
                      <div className="teacher-box is-hidden-desktop">
                          <div className="avatar pfer"></div>
                          <div>
                              <div className="name">Pablo F.</div>
                              <div className="job-title">SP Engineer</div>
                          </div>
                          <a href="https://www.linkedin.com/in/pffranco/" target="_blank" className="cta"></a>
                      </div>
                  </div>
                  <div className="column is-two-fifths">
                      <div className="teacher-box is-hidden-mobile">
                          <div className="avatar pperi"></div>
                          <div>
                              <div className="name">{texts.teachers.two.name}</div>
                              <div className="job-title">{texts.teachers.two.position}</div>
                          </div>
                          <a href="https://www.linkedin.com/in/pabloperibañez/" target="_blank" className="cta"></a>
                      </div>

                      <div className="teacher-box is-hidden-desktop">
                          <div className="avatar pperi"></div>
                          <div>
                              <div className="name">Pablo P.</div>
                              <div className="job-title">Design Systems</div>
                          </div>
                          <a href="https://www.linkedin.com/in/pabloperibañez/" target="_blank" className="cta"></a>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <section className="section pricing-section">
          <div className="container">
              <div className="columns">
                  <div className="column has-text-centered pricing-title">
                      <h2>{texts.pricing.title}</h2>
                  </div>
              </div>
              <div className="columns prices">
                  <div className="column newsletter">
                      <div className="dst-dotted-container pricing-container pricing-dotted-container secondary">
                          <div className="info">{texts.pricing.card.one.caption}</div>
                          <div className="title"><h3>{texts.pricing.card.one.title}</h3></div>
                          <h2 className="price-primary">{texts.pricing.card.one.price}</h2>
                          <div className="reasons">{texts.pricing.card.one.description}</div>
                          <div className="button">
                              <a href="https://designtokenses.substack.com" target="_blank" className="dst-button secondary">{texts.pricing.card.one.button}</a>
                          </div>
                      </div>
                  </div>
                  <div className="column course">
                      <div className="company-info mobile links is-hidden-desktop">
                        <span>¿Necesitas facturar como empresa?</span>
                        <span>Contáctanos a <a href="mailto:hola@designtokens.es">hola@designtokens.es</a></span>
                      </div>
                      <div className="dst-dotted-container pricing-container pricing-dotted-container-salient secondary">
                          <div className="info">{texts.pricing.card.two.caption}</div>
                          <div className="title"><h3>{texts.pricing.card.two.title}</h3></div>
                          <div className="price">
                              <h2 className="price-primary">{texts.pricing.card.two['price-primary']}</h2>
                              <h3 className="price-secondary">{texts.pricing.card.two['price-secondary']}</h3>
                          </div>
                          <div className="reasons">{texts.pricing.card.two.description}</div>
                          <div className="button">
                              <a href="https://buy.stripe.com/9AQ7wz0ky8AD9IAeUU" className="dst-button primary" target="_blank">{texts.pricing.card.two.button}</a>
                          </div>
                      </div>
                      <div className="company-info desktop links is-hidden-mobile">
                        <span>¿Necesitas facturar como empresa?</span>
                        <span>Contáctanos a <a href="mailto:hola@designtokens.es">hola@designtokens.es</a></span>
                      </div>
                  </div>
                  <div className="column consultory">
                      <div className="dst-dotted-container secondary pricing-container pricing-dotted-container">
                          <div className="info">{texts.pricing.card.three.caption}</div>
                          <div className="title"><h3>{texts.pricing.card.three.title}</h3></div>
                          <div className="reasons">{texts.pricing.card.three.description}</div>
                          <div className="button">
                              <a href="mailto:hola@designtokens.es" className="dst-button secondary">{texts.pricing.card.three.button}</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <section className="section video">
          <div className="container video-container">
              <div className="columns">
                  <div className="column has-text-centered pricing-title">
                      <h2>{texts.video.title}</h2>
                  </div>
              </div>
              <div>
                <LiteYouTubeEmbed
                    id="pjc-6Ff_Ezc"
                    title="Webinar sobre el curso de design tokens"
                />
              </div>
          </div>
      </section>

      <section className="section qa">
          <div className="container qa-container">
              <div className="columns">
                  <div className="column is-two-fifths">
                      <h2><span>Preguntas</span><span>frecuentes</span></h2>
                  </div>
                  <div className="column sessions">
                      {Object.values(texts.faqs).filter(v => typeof v === 'object').map((props, index) => <Session {...props} key={`faq-${index}`} />)}
                  </div>
              </div>
          </div>
      </section>
    </>
)
