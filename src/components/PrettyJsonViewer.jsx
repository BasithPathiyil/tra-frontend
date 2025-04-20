import React from "react";

const PrettyJsonViewer = ({ data, indent = 0 }) => {
  const renderValue = (value, level) => {
    const padding = { paddingLeft: `${level * 20}px` };

    if (Array.isArray(value)) {
      return (
        <>
          <div style={padding}>[</div>
          {value.map((item, index) => (
            <React.Fragment key={index}>
              <div>{renderValue(item, level + 1)}</div>
              {index < value.length - 1 && (
                <div style={padding} className="text-gray-500">,</div>
              )}
            </React.Fragment>
          ))}
          <div style={padding}>]</div>
        </>
      );
    }

    if (value && typeof value === "object") {
      const entries = Object.entries(value);
      return (
        <>
          <div style={padding}>{"{"}</div>
          {entries.map(([key, val], index) => (
            <React.Fragment key={key}>
              <div style={{ paddingLeft: `${(level + 1) * 20}px` }}>
                <span className="text-blue-600">"{key}"</span>: {renderValue(val, 0)}
              </div>
              {index < entries.length - 1 && (
                <div style={padding} className="text-gray-500">,</div>
              )}
            </React.Fragment>
          ))}
          <div style={padding}>{"}"}</div>
        </>
      );
    }

    // Primitives
    if (typeof value === "string") {
      return <span className="text-green-600">"{value}"</span>;
    }
    if (typeof value === "number") {
      return <span className="text-orange-500">{value}</span>;
    }
    if (typeof value === "boolean") {
      return <span className="text-purple-600">{value.toString()}</span>;
    }
    if (value === null) {
      return <span className="text-gray-500 italic">null</span>;
    }

    return <span>{value}</span>;
  };

  return (
    <div className="bg-gray-100 p-4 rounded font-mono text-sm overflow-auto border whitespace-pre-wrap leading-relaxed">
      {renderValue(data, indent)}
    </div>
  );
};

export default PrettyJsonViewer;
