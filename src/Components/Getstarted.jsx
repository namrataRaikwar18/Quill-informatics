const Getstarted = () => {
  return (
    <>
      <section id="getting-started">
        <h4>Getting Started</h4>
        <p className="paragraph">This template is divided in two folders:</p>
        <table>
          <tbody>
            <tr>
              <th>Folder</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>/build</td>
              <td>
                This is the compiled version. Includes regular CSS and ready to
                be uploaded to your server.
              </td>
            </tr>
            <tr>
              <td>/source</td>
              <td>Use this folder if you're used to work with Sass.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <div className="divider"></div>
    </>
  )
}

export { Getstarted }
