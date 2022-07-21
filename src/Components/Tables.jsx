const Tables = () => {
  return (
    <>
      <section id="tables">
        <h4>Tables</h4>
        <p className="paragraph">
          Built with headers and rows, a table is useful to display many items
          or content with measurable data.
        </p>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Modified</th>
              <th>Size</th>
            </tr>
            <tr>
              <td>Documentation</td>
              <td>Today</td>
              <td>12.7 MB</td>
            </tr>
            <tr>
              <td>Style Guide</td>
              <td>Yesterday</td>
              <td>2.4 MB</td>
            </tr>
            <tr>
              <td>Templates</td>
              <td>Yesterday</td>
              <td>4.5 MB</td>
            </tr>
          </tbody>
        </table>
      </section>

      <div className="divider"></div>
    </>
  )
}

export { Tables }
