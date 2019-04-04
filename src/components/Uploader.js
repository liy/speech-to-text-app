import React, { Component } from 'react';
import axios from 'axios';

const rusha = require('rusha');

class Uploader extends Component {
	constructor(props) {
		super(props);

		this.state = {
			file: null
		};

    this.onChange = this.onChange.bind(this);
    this.onUpload = this.onUpload.bind(this);
  }

	onChange(e) {
    this.setState({
      file: e.target.files[0]
    });
	}

	onUpload(e) {
    e.preventDefault();
    const { file } = this.state;
    const { token } = this.props;

    const url = 'https://us-central1-speech-to-text-236211.cloudfunctions.net/uploadFile';

    const config = {
      headers: {
        'content-type': 'application/json'
      }
    };

    const reader = new FileReader();
    reader.readAsArrayBuffer(file);

    reader.onload = () => {
      const arrayBuffer = reader.result;
      const base64Str = btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)))

      const data = {
        file: base64Str,
        guid: rusha.createHash().update(reader.result).digest('hex'),
        token
      };

      console.log(data);

      return axios.post(url, data, config);
    };
	}

  render() {
    return (
      <div>
        <form>
          <h2>Upload video</h2>
          <input type="file" onChange={this.onChange} />
          <button className="c-btn" onClick={this.onUpload}>Upload</button>
        </form>
      </div>
    );
  }
}

export default Uploader;
