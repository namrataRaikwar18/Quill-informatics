const Forms = () => {
    return(
        <>
             <section id="forms">
            <h4>Forms</h4>
            <p className="paragraph">Input fields are divided into types and states. Below code is a default input:</p>
            <div className="code-markup">
              <span className="code-header">Example:</span>
              <code className="code-snippet">
                &lt;form&gt;<br/>
                &nbsp;&lt;div className="form-group"&gt;<br/>
                &nbsp;&nbsp;&lt;label for="name"&gt;<span>Your Name:</span>&lt;/label&gt;<br/>
                &nbsp;&nbsp;&lt;input id="name" type="text" name="name"&gt;<br/>
                &nbsp;&lt;/div&gt;<br/>
                &lt;/form&gt;
              </code>
            </div>
            <p className="paragraph">Dropdown:</p>
            <div className="code-markup">
              <span className="code-header">Example:</span>
              <code className="code-snippet">
                &lt;form&gt;<br/>
                &nbsp;&lt;div className="form-group"&gt;<br/>
                &nbsp;&nbsp;&lt;label for="country"&gt;<span>Country:</span>&lt;/label&gt;<br/>
                &nbsp;&nbsp;&lt;div className="select-wrapper"&gt;<br/>
                &nbsp;&nbsp;&nbsp;&lt;select id="country" name="country"&gt;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;option selected="" disabled="" value=""&gt;Choose country…&lt;/option&gt;<br/>
                &nbsp;&nbsp;&nbsp;&lt;/select&gt;<br/>
                &nbsp;&nbsp;&lt;/div&gt;<br/>
                &nbsp;&lt;/div&gt;<br/>
                &lt;/form&gt;
              </code>
            </div>
            <p className="paragraph">Input area:</p>
            <div className="code-markup">
              <span className="code-header">Example:</span>
              <code className="code-snippet">
                &lt;form&gt;<br/>
                &nbsp;&lt;div className="form-group"&gt;<br/>
                &nbsp;&nbsp;&lt;label for="email"&gt;<span>Message:</span>&lt;/label&gt;<br/>
                &nbsp;&nbsp;&lt;textarea id="message" name="message"&gt;&lt;/textarea&gt;<br/>
                &nbsp;&nbsp;&lt;span className="form-help"&gt;<span>500 characters max.</span>&lt;/span&gt;<br/>
                &nbsp;&lt;/div&gt;<br/>
                &lt;/form&gt;
              </code>
            </div>
            <p className="paragraph">Switch:</p>
            <div className="code-markup">
              <span className="code-header">Example:</span>
              <code className="code-snippet">
                &lt;form&gt;<br/>
                &nbsp;&lt;div className="form-group"&gt;<br/>
                &nbsp;&nbsp;&lt;label&gt;<span>Switch:</span>&lt;/label&gt;<br/>
                &nbsp;&nbsp;&lt;input id="s1" className="switch" type="checkbox" checked&gt;<br/>
                &nbsp;&nbsp;&lt;label for="s1" className="switch"&gt;&lt;/label&gt;<br/>
                &nbsp;&lt;/div&gt;<br/>
                &lt;/form&gt;
              </code>
            </div>
            <p className="paragraph">Checkboxes:</p>
            <div className="code-markup">
              <span className="code-header">Example:</span>
              <code className="code-snippet">
                &lt;form&gt;<br/>
                &nbsp;&lt;div className="form-group"&gt;<br/>
                &nbsp;&nbsp;&lt;label&gt;<span>Checkboxes:</span>&lt;/label&gt;<br/>
                &nbsp;&nbsp;&lt;input id="c1" type="checkbox" name="item-one"&gt;<br/>
                &nbsp;&nbsp;&lt;label for="c1" className="checkbox"&gt;Item one.&lt;/label&gt;<br/>
                &nbsp;&nbsp;&lt;input id="c2" type="checkbox" name="item-two"&gt;<br/>
                &nbsp;&nbsp;&lt;label for="c2" className="checkbox"&gt;Item two.&lt;/label&gt;<br/>
                &nbsp;&lt;/div&gt;<br/>
                &lt;/form&gt;
              </code>
            </div>
            <p className="paragraph">Radio buttons:</p>
            <div className="code-markup">
              <span className="code-header">Example:</span>
              <code className="code-snippet">
                &lt;form&gt;<br/>
                &nbsp;&lt;div className="form-group"&gt;<br/>
                &nbsp;&nbsp;&lt;label&gt;<span>Radio Buttons:</span>&lt;/label&gt;<br/>
                &nbsp;&nbsp;&lt;input id="r1" type="radio" name="item" checked&gt;<br/>
                &nbsp;&nbsp;&lt;label for="r1" className="radio"&gt;Item one.&lt;/label&gt;<br/>
                &nbsp;&nbsp;&lt;input id="r2" type="radio" name="item"&gt;<br/>
                &nbsp;&nbsp;&lt;label for="r2" className="radio"&gt;Item two.&lt;/label&gt;<br/>
                &nbsp;&lt;/div&gt;<br/>
                &lt;/form&gt;
              </code>
            </div>
          </section>
          <div className="divider"></div>
        </>
    )
}

export {Forms};