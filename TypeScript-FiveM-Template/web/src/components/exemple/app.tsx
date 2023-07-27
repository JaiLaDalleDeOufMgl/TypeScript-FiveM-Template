import './style.css';

function Exemple(props: any) {
  if (props.show) {
    return (
      <div className="exemple">
        <h1>je m'appel {props.data.name}</h1>
        <p>j'ai {props.data.age}</p>
      </div>

    );
  }
}

export default Exemple;