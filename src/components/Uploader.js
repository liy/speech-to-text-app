import React, { Component } from 'react';
import axios from 'axios';

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

	onUpload() {
    const { file } = this.state;
    const { token } = this.props;

    const url = 'https://us-central1-speech-to-text-236211.cloudfunctions.net/uploadFile';

    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    };

    const reader = new FileReader();
    reader.readAsArrayBuffer(file);

    reader.onload = () => {
      const fileContent = reader.result;
      const data = {
        file: fileContent,
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
