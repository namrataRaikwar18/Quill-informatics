const Typography = () => {
  return (
    <>
      <section id="typography">
        <h4>Typography</h4>
        <p className="paragraph">
          Listed below are all default styles for headings. Headings{' '}
          <b>&lt;h1&gt;</b> through <b>&lt;h6&gt;</b>, are available.
        </p>
        <div className="code-markup">
          <span className="code-header">Example:</span>
          <code className="code-snippet">
            &lt;h1&gt;<span>Heading 1</span>&lt;/h1&gt;
            <br />
            &lt;h2&gt;<span>Heading 2</span>&lt;/h2&gt;
            <br />
            &lt;h3&gt;<span>Heading 3</span>&lt;/h3&gt;
            <br />
            &lt;h4&gt;<span>Heading 4</span>&lt;/h4&gt;
            <br />
            &lt;h5&gt;<span>Heading 5</span>&lt;/h5&gt;
            <br />
            &lt;h6&gt;<span>Heading 6</span>&lt;/h6&gt;
          </code>
        </div>
        <div className="divider"></div>
        <h4>Lead</h4>
        <p className="paragraph">
          The main purpose of the lead style is to support headings as a
          subtitle.
        </p>
        <div className="code-markup">
          <span className="code-header">Example:</span>
          <code className="code-snippet">
            &lt;p className="lead"&gt;&lt;/p&gt;
          </code>
        </div>
        <div className="divider"></div>
        <h4>Paragraph</h4>
        <p className="paragraph">
          With an increased font-size and line-height, the paragraph style is
          great for readability.
        </p>
        <div className="code-markup">
          <span className="code-header">Example:</span>
          <code className="code-snippet">
            &lt;p className="paragraph"&gt;&lt;/p&gt;
          </code>
        </div>
        <div className="divider"></div>
        <h4>Lists</h4>
        <p className="paragraph">Below is the code for unordered lists.</p>
        <div className="code-markup">
          <span className="code-header">Example:</span>
          <code className="code-snippet">
            &lt;ul&gt;
            <br />
            &nbsp;&lt;li&gt;<span>List item one.</span>&lt;/li&gt;
            <br />
            &nbsp;&lt;li&gt;<span>List item two.</span>&lt;/li&gt;
            <br />
            &nbsp;&lt;li&gt;<span>List item three.</span>&lt;/li&gt;
            <br />
            &lt;/ul&gt;
          </code>
        </div>
        <p className="paragraph">Below is the code for ordered lists.</p>
        <div className="code-markup">
          <span className="code-header">Example:</span>
          <code className="code-snippet">
            &lt;ol&gt;
            <br />
            &nbsp;&lt;li&gt;<span>List item one.</span>&lt;/li&gt;
            <br />
            &nbsp;&lt;li&gt;<span>List item two.</span>&lt;/li&gt;
            <br />
            &nbsp;&lt;li&gt;<span>List item three.</span>&lt;/li&gt;
            <br />
            &lt;/ol&gt;
          </code>
        </div>
        <p className="paragraph">
          You can also add class "inline" to make horizontal lists.
        </p>
        <div className="code-markup">
          <span className="code-header">Example:</span>
          <code className="code-snippet">
            &lt;ul className="inline"&gt;
            <br />
            &nbsp;&lt;li&gt;&lt;a href="#"&gt;<span>List item one.</span>
            &lt;/a&gt;&lt;/li&gt;
            <br />
            &nbsp;&lt;li&gt;&lt;a href="#"&gt;<span>List item two.</span>
            &lt;/a&gt;&lt;/li&gt;
            <br />
            &nbsp;&lt;li&gt;&lt;a href="#"&gt;<span>List item three.</span>
            &lt;/a&gt;&lt;/li&gt;
            <br />
            &lt;/ul&gt;
          </code>
        </div>
      </section>
      <div className="divider"></div>
    </>
  )
}

export { Typography }
