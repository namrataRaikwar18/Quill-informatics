const Cards = () => {
    return(
        <>
                <section id="cards">
            <h4>Cards</h4>
            <p className="paragraph">A card is a great content container.</p>
            <div className="code-markup">
              <span className="code-header">Example:</span>
              <code className="code-snippet">
                &lt;div className="card card-content"&gt;<br/>
                &nbsp;&nbsp;&lt;h5&gt;<span>Card Title</span>&lt;/h5&gt;<br/>
                &nbsp;&nbsp;&lt;p className="paragraph"&gt;<span>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</span>&lt;/p&gt;<br/>
                &lt;/div&gt;
              </code>
            </div>
          </section>

          <div className="divider"></div>
        </>
    )
}

export {Cards};