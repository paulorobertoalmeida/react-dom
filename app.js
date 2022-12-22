const Person = props => {
    return React.createElement('div', {}, [
        React.createElement('h1', {}, props.name),
        React.createElement('p', {}, props.occupation)
    ])
}

const App = () => {
    return React.createElement('div', {}, [
      React.createElement('h1', { class: 'title'}, 'React is rendered'), 
      React.createElement(Person, { name: 'Paulo', occupation: 'Software Developer'}, null), 
    ]);
};

ReactDOM.render(React.createElement(App),document.getElementById('root')
);