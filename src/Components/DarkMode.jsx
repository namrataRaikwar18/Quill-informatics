const DarkMode = () => {
    return(
        <>
            <section id="dark-mode">
            <h4>Dark Mode</h4>
            <p className="paragraph">If you want to turn a module dark, add class .dark to the section.</p>
            <div className="code-markup">
              <span className="code-header">Example:</span>
              <code className="code-snippet">
                &lt;section className="bg-dark dark"&gt;&lt;/section&gt;
              </code>
            </div>
            <p className="paragraph">You've reached the end of the documentation. If you need any help, please send us a support ticket.</p>
          </section>

        </>
    )
}

export {DarkMode};