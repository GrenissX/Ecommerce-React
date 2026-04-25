import styles from './About.module.css'

export default function About() {
  const team = [
    { name: 'Alejandra Torres', role: 'CEO & Fundadora', emoji: '👩‍💼' },
    { name: 'Carlos Mendoza', role: 'Director de Tecnología', emoji: '👨‍💻' },
    { name: 'Valentina Ríos', role: 'Head of Design', emoji: '👩‍🎨' },
  ]

  const values = [
    { icon: '⚡', title: 'Innovación', text: 'Siempre a la vanguardia con los mejores productos tecnológicos del mercado.' },
    { icon: '🛡️', title: 'Confianza', text: 'Garantía de calidad y autenticidad en cada uno de nuestros productos.' },
    { icon: '🚀', title: 'Velocidad', text: 'Entregas rápidas y seguras a todo el territorio nacional.' },
    { icon: '💬', title: 'Soporte', text: 'Atención al cliente 24/7 para resolver cualquier duda o inconveniente.' },
  ]

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <section className={styles.hero}>
          <span className={styles.pill}>Nuestra historia</span>
          <h1 className={styles.title}>
            Llevamos la tecnología<br />
            <span className={styles.accent}>más cerca de ti</span>
          </h1>
          <p className={styles.sub}>
            NOVA Store nació en 2020 con una misión clara: democratizar el acceso a
            la tecnología premium en Colombia. Somos más que una tienda — somos una
            comunidad de entusiastas tech.
          </p>
        </section>

        <section className={styles.values}>
          <h2 className={styles.sectionTitle}>Nuestros valores</h2>
          <div className={styles.valuesGrid}>
            {values.map(({ icon, title, text }) => (
              <div key={title} className={styles.valueCard}>
                <span className={styles.valueIcon}>{icon}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.team}>
          <h2 className={styles.sectionTitle}>El equipo</h2>
          <div className={styles.teamGrid}>
            {team.map(({ name, role, emoji }) => (
              <div key={name} className={styles.teamCard}>
                <div className={styles.avatar}>{emoji}</div>
                <h3>{name}</h3>
                <p>{role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
