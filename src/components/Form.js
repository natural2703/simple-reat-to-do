import React from "react";

function Form(){
    return(
        <form>
            <input type="text"/>
            <button type="submit">
                Dodaj
            </button>
            <div>
                <select>
                    <option>ALl</option>
                    <option>Finished</option>
                    <option>Not yet</option>
                </select>
            </div>
        </form>
    )
}
export default Form;