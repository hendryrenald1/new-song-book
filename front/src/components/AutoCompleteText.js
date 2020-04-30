import React from "react";

class AutoCompleteText extends React.Component {
  constructor(props) {
    super(props);

    this.items = ["David", "Damien", "Sara", "Jane"];
  }

  render() {
    return (
      <div>
        <input type="text" onChange={(e) => console.log(e.target.value)} />
        <ul>
          {this.items.map((item) => (
            <li> {item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default AutoCompleteText;
