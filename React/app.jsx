var Badge = React.createClass({
    render: function() {
      return <button className="btn btn-primary" type="button">
        {this.props.title} <span className="badge">{this.props.number}</span>
      </button>
    }
  });

  var Thumbnail = React.createClass({
    render: function() {
      return <div className="col-sm-6 col-md-4">
        <div className="thumbnail">
          <img src={this.props.imageUrl} alt="..."></img>
          <div className="caption">
            <h3>{this.props.header}</h3>
            <p>{this.props.description}</p>
            <p>
              <Badge title={this.props.title} number={this.props.number} />
            </p>
          </div>
        </div>
      </div>
    }
  });

  var ThumbnailList = React.createClass({
    render: function() {
      var list = this.props.thumbnailData.map(function(item,key){
        console.log(key , item);
        return <Thumbnail key={key} {...item} />
      });
      console.log(list);

      return <div>
        {list}
      </div>
    }
  });

  var options = {
    thumbnailData:  [{
      title: 'Show Courses',
      number: 12,
      header: 'Learn React',
      description: 'React is a fantastic new front end library for rendering web pages. React is a fantastic new front end library for rendering web pages.',
      imageUrl: 'https://raw.githubusercontent.com/wiki/facebook/react/react-logo-1000-transparent.png'
    },{
      title: 'Show Courses',
      number: 25,
      header: 'Learn Gulp',
      description: 'Gulp will speed up your development workflow.  Gulp will speed up your development workflow.  Gulp will speed up your development workflow.',
      imageUrl: 'http://brunch.io/images/others/gulp.png'
    },{
      title: 'Show Javascript',
      number: 200,
      header: 'Learn JS',
      description: 'React is a fantastic new front end library for rendering web pages. React is a fantastic new front end library for rendering web pages.',
      imageUrl: 'https://raw.githubusercontent.com/wiki/facebook/react/react-logo-1000-transparent.png'
    },
      {
        title: 'Show CSS',
        number: 20,
        header: 'Learn CSS',
        description: 'React is a fantastic new front end library for rendering web pages. React is a fantastic new front end library for rendering web pages.',
        imageUrl: 'https://raw.githubusercontent.com/wiki/facebook/react/react-logo-1000-transparent.png'
      }
    ]
  };

  var element = React.createElement(ThumbnailList, options);
  React.render(element, document.querySelector('.container'));