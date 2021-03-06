import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import Highlight from 'utils/Highlight';
import './IndexView.scss';
import 'simple-line-icons/scss/simple-line-icons.scss';

const data = [
  { name: 'A', uv: 400, pv: 240, amt: 2400 },
  { name: 'B', uv: 300, pv: 456, amt: 2400 },
  { name: 'C', uv: 300, pv: 139, amt: 2400 },
  { name: 'D', uv: 200, pv: 980, amt: 2400 },
  { name: 'E', uv: 278, pv: 390, amt: 2400 },
  { name: 'F', uv: 189, pv: 480, amt: 2400 },
];

class IndexView extends PureComponent {
  render() {
    const exCode = `
  <LineChart width={500} height={300} data={data}>
    <XAxis dataKey="name"/>
    <YAxis/>
    <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
  </LineChart>
    `;

    return (
      <div className="page page-index">
        <div className="desc">
          <p className="title">Recharts</p>
          <p className="subtitle">A composable charting library built on React components</p>
          <p><a href="/guide#installation" className="button install-btn"><i className="icon-energy"></i> Install v0.18.0</a></p>
          <iframe src="https://ghbtns.com/github-btn.html?user=recharts&repo=recharts&type=star&count=true&size=large" frameBorder="0" scrolling="0" width="160px" height="30px"></iframe>
        </div>
        <div className="examples">
          <div className="ex-code">
            <LineChart width={500} height={300} data={data} margin={{ top: 5, right: 5, bottom: 5, left: 0 }}>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
              <Line type="monotone" dataKey="uv" stroke="#8884d8" />
              <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
            </LineChart>
            <Highlight className="e4x">{exCode}</Highlight>
          </div>
        </div>
        <div className="features">
          <ul className="feat">
            <li>
              <i className="icon-puzzle"></i>
              <strong>Composable</strong>
              <p className="text">Quickly build your charts with decoupled, reusable React components.</p>
            </li>
            <li>
              <i className="icon-layers"></i>
              <strong>Reliable</strong>
              <p className="text">Built on top of SVG elements with a lightweight dependency on D3 submodules.</p>
            </li>
            <li>
              <i className="icon-energy"></i>
              <strong>Powerful</strong>
              <p className="text">Customize your chart by tweaking component props and passing in custom components.</p>
            </li>
          </ul>
        </div>
        <div className="like">
          <i className="icon-rocket"></i>
          <p className="text">Recharts makes it easy to integrate charts into your React application</p>
          <p className="btn"><a href="/guide#getting-started" className="button getting-started-btn">Get Started</a></p>
        </div>
      </div>
    );
  }
}

export default IndexView;
