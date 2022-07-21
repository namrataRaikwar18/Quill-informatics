import { reverseOrderImg, reverseOrderImg2 } from "../assets";

const Grid = () => {
    return(
        <>
            
        <section id="grid">
        <h4>Grid</h4>
        <p className="paragraph">The simple grid below is based on 5 columns. You can add "no-gutter" as a class to remove spacing between columns.</p>
        <div className="code-markup">
          <span className="code-header">Example:</span>
          <code className="code-snippet">
            &lt;div className="row"&gt;<br/>
            &nbsp;&nbsp;&lt;div className="col-one-third"&gt;&lt;/div&gt;<br/>
            &nbsp;&nbsp;&lt;div className="col-one-third"&gt;&lt;/div&gt;<br/>
            &nbsp;&nbsp;&lt;div className="col-one-third"&gt;&lt;/div&gt;<br/>
            &lt;/div&gt;
          </code>
        </div>
        <p className="paragraph">You can also have unequal columns.</p>
        <div className="code-markup">
          <span className="code-header">Example:</span>
          <code className="code-snippet">
            &lt;div className="row"&gt;<br/>
            &nbsp;&nbsp;&lt;div className="col-two-thirds"&gt;&lt;/div&gt;<br/>
            &nbsp;&nbsp;&lt;div className="col-one-third"&gt;&lt;/div&gt;<br/>
            &lt;/div&gt;
          </code>
        </div>
        <p className="paragraph">Add class .reverse-order to reverse the order of columns on tablets and mobiles.</p>
        <div className="code-markup">
          <span className="code-header">Example:</span>
          <code className="code-snippet">
            &lt;div className="row"&gt;<br/>
            &nbsp;&nbsp;&lt;div className="col-one-half"&gt;&lt;/div&gt;<br/>
            &nbsp;&nbsp;&lt;div className="col-one-half"&gt;&lt;/div&gt;<br/>
            &lt;/div&gt;<br/>
            &lt;div className="row reverse-order"&gt;<br/>
            &nbsp;&nbsp;&lt;div className="col-one-half"&gt;&lt;/div&gt;<br/>
            &nbsp;&nbsp;&lt;div className="col-one-half"&gt;&lt;/div&gt;<br/>
            &lt;/div&gt;
          </code>
        </div>
        {/* srcSet="assests/reverse-order.png 1x, assets/reverse-order@2x.png 2x" */}
        <p className="paragraph">The illustration below shows above code.</p>
        <img className="center space-bottom" src={reverseOrderImg} 
srcSet={`${reverseOrderImg}  ${reverseOrderImg2}`}
         alt="Reverse Order"/>
        <p className="paragraph">Add class .min-two-columns for a minimum of two columns on mobile.</p>
        <div className="code-markup">
          <span className="code-header">Example:</span>
          <code className="code-snippet">
            &lt;div className="row min-two-columns"&gt;<br/>
            &nbsp;&nbsp;&lt;div className="col-one-fourth"&gt;&lt;/div&gt;<br/>
            &nbsp;&nbsp;&lt;div className="col-one-fourth"&gt;&lt;/div&gt;<br/>
            &nbsp;&nbsp;&lt;div className="col-one-fourth"&gt;&lt;/div&gt;<br/>
            &nbsp;&nbsp;&lt;div className="col-one-fourth"&gt;&lt;/div&gt;<br/>
            &lt;/div&gt;
          </code>
        </div>
      </section>
      <div className="divider"></div>
        </>
    )
}

export {Grid};