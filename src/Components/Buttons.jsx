const Buttons = () => {
  return(
    <>
         <section id="buttons">
            <h4>Buttons</h4>
            <p className="paragraph">Buttons are divided into types: primary, secondary and other states such as disabled.</p>
            <div className="code-markup">
              <span className="code-header">Example:</span>
              <code className="code-snippet">
                &lt;a href="#" className="button button-primary" role="button"&gt;<span>Primary</span>&lt;/a&gt;<br/>
                &lt;a href="#" className="button button-secondary" role="button"&gt;<span>Secondary</span>&lt;/a&gt;<br/>
                &lt;a href="#" className="button button-disabled" role="button"&gt;<span>Disabled</span>&lt;/a&gt;
              </code>
            </div>
            <p className="paragraph">To change the size, you can add class "button-l" for a large button. There are four pre-defined sizes: large, default, medium and small.</p>
          </section>

          <div className="divider"></div>
    </>
  )  
}

export {Buttons};