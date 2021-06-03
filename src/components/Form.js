import React from 'react';

class Form extends React.Component {

  render() {
    return (
      <div>
          <form>
          <label>
          <input name="url" placeholder="http://..." /> 
        </label>
        <label>
          <input type="radio" name="method" value="get" />
          <span>GET</span>
        </label>
        <label>
          <input type="radio" name="method" value="post" />
          <span>POST</span>
        </label>
        <label>
          <input type="radio" name="method" value="put" />
          <span>PUT</span>
        </label>
        <label>
          <input type="radio" name="method" value="delete" />
          <span>DELETE</span>
        </label>
        <label>
          <textarea name="body"></textarea>
        </label>
        <button type="submit">GO</button>

          </form>
      </div>

    );
  }
}

export default Form;