const OpenPost = (oncFunc) => {
    
    return (
        <div className="active_pop_up">
            <div className="cont">
                <img className="x_btn" onClick={oncFunc} src="https://www.freeiconspng.com/thumbs/close-button-png/black-circle-close-button-png-5.png" alt=""></img>
                <img className="koczka_kep" src="https://media.discordapp.net/attachments/1110164952590856243/1112638199022501910/Screenshot_from_2023-05-29_09-02-25-removebg-preview.png?width=420&height=468" alt=""></img>
                <div className="popUp_grid_item">
                    <div className="popUp_title">Tanulj ma is Koczkátol!</div>
                    <div className="popUp_quot">main</div>
                </div>
            </div>
        </div>  
    );
}

export default OpenPost;