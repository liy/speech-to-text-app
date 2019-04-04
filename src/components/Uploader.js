import React, { Component } from 'react';

class Uploader extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="file" id="file-input" />
        </form>
      </div>
    );
  }
}

export default Uploader;
