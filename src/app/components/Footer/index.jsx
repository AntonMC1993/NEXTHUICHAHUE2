export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.containerfooter}>
        <div className={styles.rowfooter}>
          <div className={styles.footer_col}>
            <h4>MENÚ</h4>
            <ul>
              <Link href={"/"}>Inicio</Link>
              <Link href={"/Tienda"}>Tienda</Link>
              <Link href={"/"}>Termines y condiciones</Link>
              <Link href={"/Contacto"}>Contáctanos</Link>
            </ul>
          </div>
          <div className={styles.footer_col}>
            <h4>SÍGUENOS</h4>
            <div className={styles.redes_sociales_link}>
              <ul>
                <Link
                  href={
                    "/"
                  } /* href={"https://www.instagram.com/cerveza_huichahue/"} */
                >
                  <i class="fab fa-instagram">
                    <p>Instagram</p>
                  </i>
                </Link>
                <Link
                  href={"/"}
                  /*  href={
                      url"https://web.facebook.com/cerveza.huichahue/?_rdc=1&_rdr"
                    } */
                >
                  <i class="fab fa-facebook">
                    <p>Facebook</p>
                  </i>
                </Link>
                <Link href={"/"}>
                  {" "}
                  <i class="fab fa-whatsapp">
                    <p>Whatsapp</p>
                  </i>
                </Link>
              </ul>
            </div>
          </div>
          <div className={styles.footer_col}>
            <ul>
              <Link href={"/"}>
                <Image
                  src="/logo.png"
                  alt="Logo Cerveza Huichahue"
                  width={80}
                  height={80}
                />
              </Link>
            </ul>
          </div>
          <div className={styles.footer_col}>
            <h4>SOBRE NOSOTROS</h4>
            <ul>
              <Link href={"/"}>Nuestra Historia</Link>
              <Link href={"/"}>Vision</Link>
              <Link href={"/"}>Mision</Link>
              <Link href={"/"}>Mundo Consciente</Link>
            </ul>
          </div>
          <div className={styles.footer_col}>
            <h4>PARTNERS</h4>
            <div className={styles.partners_logos}>
              <ul>
                <Link href={"/"}>
                  <Image
                    src="/Balloon.png"
                    alt="Logo Balloon Latam"
                    width={50}
                    height={50}
                  />
                </Link>
                <Link href={"/"}>
                  <Image
                    src="/Reciclamos.png"
                    alt="Todos reciclamos"
                    width={50}
                    height={50}
                  />
                </Link>
                <Link href={"/"}>
                  <Image
                    src="/Fosis.png"
                    alt="Logo Fosis"
                    width={50}
                    height={50}
                  />
                </Link>
                <Link href={"/"}>
                  <Image
                    src="/Kyklos.png"
                    alt="Logo Kyklos"
                    width={50}
                    height={50}
                  />
                </Link>
                <Link href={"/"}>
                  <Image
                    src="/Sercotec.png"
                    alt="Logo Sercotec"
                    width={50}
                    height={50}
                  />
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.footer_texto_copyright}>
          <p>Cerveza Huichahue®. Beber con moderación</p>
        </div>
      </div>
    </footer>
  );
}

4;
