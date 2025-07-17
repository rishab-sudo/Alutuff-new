import React from "react";
import bannerImage from '../assets/1400.jpg'
import Banner from "../components/Banner";
import "./TestReport.css";

// Cleaned and merged version of table1Data
const table1Data = {
  title: "Technical Specification Report - 4.5mm",
  subtitle: "NAME 3MM(0.25mm)",
  rows: [
    ["Panel Weight", "3.87Kg/m2"],
    ["Gravity", "1.42g/cc"],
    ["Panel Thickness", "2.99~3.00mm"],
    ["F.D.F.T.", "30~31 µm"],
    ["B.D.F.T", "14~15 µm"],
    ["Coating Type", "PVDF"],
    ["Specular Gloss (F)", "25~26 %"],
    ["Pencil Hardness", "2H"],
    ["Cross Hatch Test", "No Peeling Found"],
    ["Impact Resistance", "No Cracking found"],
    ["Acid Resistance", "No Effect"],
    ["Protective Weight", "0.085 Kg/m2"],
    [
      "LDPE (Quality)",
      "0.700 Gram/10min / 0.967 G/cc / -X Batch"
    ],
    ["Coil Thickness (F)", "0.25mm"],
    ["Coil Thickness (B)", "0.25mm"],
    ["Bonding Strength", "6 N/mm"],
    ["Tensile Strength", "20 N/mm2"],
    ["Elongation", "7.00%"],
  ],
};

// Cleaned and merged version of table2Data
const table2Data = {
  title: "Technical Specification Report - 3.25mm",
  subtitle: "NAME 3MM(0.25mm)",
  rows: [
    ["Panel Weight", "5.68Kg/m2"],
    ["Gravity", "1.42g/cc"],
    ["Panel Thickness", "3.95~3.98 mm"],
    ["F.D.F.T.", "30~31 µm"],
    ["B.D.F.T", "14~15 µm"],
    ["Coating Type", "PVDF"],
    ["Specular Gloss (F)", "25~26 %"],
    ["Pencil Hardness", "2H"],
    ["Cross Hatch Test", "No Peeling found"],
    ["Impact Resistance", "No Cracking found"],
    ["Acid Resistance", "No Effect"],
    ["Protective Weight", "0.085 Kg/m2"],
    [
      "LDPE (Quality)",
      "0.700 Gram/10min / 0.967 G/cc / -X Batch"
    ],
    ["Coil Thickness (F)", "0.50mm"],
    ["Coil Thickness (B)", "0.50mm"],
    ["Bonding Strength", "11.1 N/mm"],
    ["Tensile Strength", "45 N/mm2"],
    ["Elongation", "7.00%"],
  ],
};

const TestTable = ({ data }) => (
  <div className="test-table">
    <h3>{data.title}</h3>
    <p className="subtitle">{data.subtitle}</p>
    <table>
      <thead>
        <tr>
          <th>S.No.</th>
          <th>Test Conducted</th>
          <th>ALUTUFF</th>
        </tr>
      </thead>
      <tbody>
        {data.rows.map(([test, value], index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{test}</td>
            <td>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const TestReportSection = () => {
  return (
    <>
      <div className="w-100">
        <Banner image={bannerImage} heading="Test Reports " />
      </div>

      <section className="test-report-section">
        <TestTable data={table1Data} />
        <TestTable data={table2Data} />
      </section>
    </>
  );
};

export default TestReportSection;
