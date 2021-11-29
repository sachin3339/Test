const Field = (props) => {
    return (
        <div class="mb-3">
            <label  class={props.class}>{props.label}</label>
            <input type={props.type} class="form-control"  onChange={props.onChange} />
        </div>
    );
}

export default Field;