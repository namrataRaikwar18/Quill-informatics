const Classes = () => {
  return (
    <>
      <section id="classes">
        <h4>Classes</h4>
        <p className="paragraph">
          There are some core classes that defines the layout and design. They
          are global and not bound to any specific module.
        </p>
        <table>
          <tbody>
            <tr>
              <th>Alignment</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>.center</td>
              <td>Add this class to center content.</td>
            </tr>
            <tr>
              <td>.center-desktop</td>
              <td>Center content starting from the desktop media query.</td>
            </tr>
            <tr>
              <td>.center-tablet</td>
              <td>Center content starting from the tablet media query.</td>
            </tr>
            <tr>
              <td>.center-mobile</td>
              <td>Center content starting from the mobile media query.</td>
            </tr>
            <tr>
              <td>.middle</td>
              <td>Align content vertically when height is unknown.</td>
            </tr>
          </tbody>
        </table>
        <div className="divider"></div>
        <table>
          <tbody>
            <tr>
              <th>Backgrounds</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>.bg-dark</td>
              <td>
                Solid background where "dark" can be replaced with "light",
                "primary", etc.
              </td>
            </tr>
            <tr>
              <td>.bg-gradient-blue</td>
              <td>
                Gradient background where "blue" can be replaced with "cyan",
                "green", etc.
              </td>
            </tr>
            <tr>
              <td>.bg-image-01</td>
              <td>
                Image-based backgrounds where "01" can be replaced with "02",
                "03", etc.
              </td>
            </tr>
            <tr>
              <td>.overlay</td>
              <td>Adds an overlay with opacity on top of backgrounds.</td>
            </tr>
            <tr>
              <td>.overlay-shape-01</td>
              <td>
                Adds an overlay shape on top of backgrounds where "01" can be
                replaced with "02", "03", etc.
              </td>
            </tr>
          </tbody>
        </table>
        <div className="divider"></div>
        <table>
          <tbody>
            <tr>
              <th>Sizes</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>.full-screen</td>
              <td>
                Adding this class will make sure the module goes full screen.
              </td>
            </tr>
            <tr>
              <td>.full-width</td>
              <td>This class will make sure the element goes full width.</td>
            </tr>
            <tr>
              <td>.full-width-tablet</td>
              <td>
                Useful if you'd like an element to go full width on tablets and
                mobile devices.
              </td>
            </tr>
            <tr>
              <td>.full-width-mobile</td>
              <td>
                Useful if you'd like an element to go full width only on mobile.
              </td>
            </tr>
            <tr>
              <td>.max-width-s</td>
              <td>Set a small maximum width of an element.</td>
            </tr>
            <tr>
              <td>.max-width-m</td>
              <td>Set a medium maximum width of an element.</td>
            </tr>
            <tr>
              <td>.max-width-l</td>
              <td>Set a large maximum width of an element.</td>
            </tr>
            <tr>
              <td>.min-width-s</td>
              <td>Set a small minimum width of an element.</td>
            </tr>
            <tr>
              <td>.min-width-m</td>
              <td>Set a medium minimum width of an element.</td>
            </tr>
            <tr>
              <td>.min-width-l</td>
              <td>Set a large minimum width of an element.</td>
            </tr>
          </tbody>
        </table>
        <div className="divider"></div>
        <table>
          <tbody>
            <tr>
              <th>Opacity</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>.opacity-s</td>
              <td>Adds a small amount of opacity.</td>
            </tr>
            <tr>
              <td>.opacity-m</td>
              <td>Adds a medium amount of opacity.</td>
            </tr>
            <tr>
              <td>.opacity-l</td>
              <td>Adds a large amount of opacity.</td>
            </tr>
          </tbody>
        </table>
        <div className="divider"></div>
        <table>
          <tbody>
            <tr>
              <th>Rounded</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>.rounded</td>
              <td>Adds a border radius to an element.</td>
            </tr>
            <tr>
              <td>.rounded-bottom</td>
              <td>Adds a border radius to the bottom of an element.</td>
            </tr>
            <tr>
              <td>.rounded-top</td>
              <td>Adds a border radius to the top of an element.</td>
            </tr>
          </tbody>
        </table>
        <div className="divider"></div>
        <table>
          <tbody>
            <tr>
              <th>Shadow</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>.shadow-s</td>
              <td>Adds a small shadow to an element.</td>
            </tr>
            <tr>
              <td>.shadow-m</td>
              <td>Adds a medium shadow to an element.</td>
            </tr>
            <tr>
              <td>.shadow-l</td>
              <td>Adds a large shadow to an element.</td>
            </tr>
            <tr>
              <td>.shadow-none</td>
              <td>Removes an existing shadow from an element.</td>
            </tr>
          </tbody>
        </table>
        <div className="divider"></div>
        <table>
          <tbody>
            <tr>
              <th>Spacing</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>.padding</td>
              <td>This is the main inner spacing of a module.</td>
            </tr>
            <tr>
              <td>.padding-bottom</td>
              <td>This is the main bottom spacing of a module.</td>
            </tr>
            <tr>
              <td>.padding-top</td>
              <td>This is the main top spacing of a module.</td>
            </tr>
            <tr>
              <td>.padding-top-tablet</td>
              <td>
                Add spacing above content starting from the tablet media query.
              </td>
            </tr>
            <tr>
              <td>.margin-bottom</td>
              <td>Add spacing below an element inside a module.</td>
            </tr>
            <tr>
              <td>.margin-top</td>
              <td>Add spacing above an element inside a module.</td>
            </tr>
            <tr>
              <td>.space</td>
              <td>Add default spacing around an element.</td>
            </tr>
            <tr>
              <td>.space-bottom</td>
              <td>
                Add default spacing to the bottom of an element. Note that
                "bottom" can be replaced with "top", "right" and "left".
              </td>
            </tr>
            <tr>
              <td>.space-none</td>
              <td>Remove any spacing that is around an element.</td>
            </tr>
          </tbody>
        </table>
      </section>
      <div className="divider"></div>
    </>
  )
}

export { Classes }
