import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import './App.css';
import "./styles.css";



export default function PrintComponent() {
  let componentRef = useRef();

  return (
    <>
      <div id="print_component">
        {/* button to trigger printing of target component */}
        <ReactToPrint
          trigger={() => <button>Print this out!</button>}
          content={() => componentRef}
        />

        {/* component to be printed */}
        <div style={{ display: "none" }}>
          <ComponentToPrint ref={(el) => (componentRef = el)} />
        </div>
      </div>
    </>
  );
}


// component to be printed
class ComponentToPrint extends React.Component {
  render() {

    return (
      <div
            className={'page-container'}
          >
            <div className={'grid-container'}>
              <div className={'grid-item1'} />
              <div className={'grid-item2'} />
              <div className={'grid-item3'} />
              <div className={'grid-item4'} />
              <div className={'grid-top-title'} />
              <div className={'COA-title'} />
              <div className={'grid-subtitle'} />
              <div className={'image'} />
              <div className={'artwork-info'} />
              <div className={'logo'} />
            </div>
          </div>
    );
  }
}
