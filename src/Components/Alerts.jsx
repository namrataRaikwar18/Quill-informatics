const Alerts = () => {
    return(
        <>
              <section id="alerts">
            <h4>Alerts</h4>
            <p className="paragraph">Use alerts to give users quick feedback on performed tasks.</p>
            <div className="code-markup">
              <span className="code-header">Example:</span>
              <code className="code-snippet">
                &lt;div className="alert alert-success" role="alert"&gt;<span>Great! This is awesome.</span>&lt;/div&gt;
              </code>
            </div>
            <table>
            <tbody>

          
              <tr>
                <th>Type</th>
                <th>Description</th>
              </tr>
              <tr>
                <td>.alert-default</td>
                <td>Neutral and default notification.</td>
              </tr>
              <tr>
                <td>.alert-error</td>
                <td>Displays an error message.</td>
              </tr>
              <tr>
                <td>.alert-success</td>
                <td>Displays a success message.</td>
              </tr>
              <tr>
                <td>.alert-warning</td>
                <td>Displays a warning.</td>
              </tr>
              </tbody>
            </table>

          </section>

          <div className="divider"></div>
        </>
    )
}

export {Alerts};