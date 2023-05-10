import "../styles/identity.css";

export const Identity = () => {
    return(
        <section id="identity">
            <div>
                <div id="address">
                    <img src="https://cdn-icons-png.flaticon.com/128/106/106121.png" alt="Adresse" />
                    <p>24 Allée école Ri7<br />13400 AUBAGNE</p>
                </div>
                <div id="tel">
                    <img src="https://cdn-icons-png.flaticon.com/128/10437/10437159.png" alt="Téléphone" />
                    <p>06 06 06 06 06</p>
                </div>
                <div id="mail">
                    <img src="https://cdn-icons-png.flaticon.com/128/481/481659.png" alt="Mail" />
                    <p>brendan.viale@ri7.com</p>
                </div>
                <div id="age">
                    <img src="https://cdn-icons-png.flaticon.com/128/9560/9560296.png" alt="Age" />
                    <p>50 ans</p>
                </div>
            </div>
        </section>
    )
}