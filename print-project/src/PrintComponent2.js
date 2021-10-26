import React, { useRef } from "react";
import './App.css';
import "./styles.css";
import { useReactToPrint } from "react-to-print";


export default function PrintComponent2() {
  let componentRef = useRef();

  const reactToPrintContent = React.useCallback(() => {
    return componentRef.current;
  }, [componentRef.current]);

  const handlePrint = useReactToPrint({
    content: reactToPrintContent,
    documentTitle: "AwesomeFileName",
    removeAfterPrint: true,
  });

  return (
    <>
      <div id="print_component">
        <button onClick={handlePrint}>
        Print using a Functional Component with the useReactToPrint hook
      </button>

        {/* component to be printed */}
        <div style={{ display: "none" }} >
        <CuteComponent2Functional ref={componentRef}  />
        </div>
      </div>
    </>
  );
}

export const CuteComponent2Functional = React.forwardRef((props, ref) => { // eslint-disable-line max-len
  return <ComponentToPrint ref={ref} />;
});

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
