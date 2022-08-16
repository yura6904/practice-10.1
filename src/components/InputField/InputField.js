function InputField(props) {

    return (
        <div className="InputField">
            <input className="text-of-service" value={props.editData.text}
                onChange={(e)=>{props.onChangeEvent('text', e.target.value)}} />
            <input className="price-of-service" type='number' value={props.editData.price}
                onChange={(e)=>{props.onChangeEvent('price', e.target.value)}} />
                
            <button onClick={() => {props.editHandler()}}>Сохранить</button>
            <button className={props.editData.visible ? 'visible' : 'hidden'}
                onClick={() => {props.cancelHandler()}}>
            Отмена</button>
        </div>
    );
}

export default InputField;
