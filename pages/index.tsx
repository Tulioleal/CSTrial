import type { NextPage } from 'next'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.scss'

interface CardProps {
  string: string
  number: number
}

const CardAnswer = ({string, number}:CardProps) => (
  <section className={styles[`answer-${number+1}`]}>
    <span className={styles.answer__select}></span>
    <article className={styles.answer__article}>
      {string}
    </article>
  </section>
)

const answers = [
  'Electricity is measured in units called watts',
  'Electricity flows at the speed of light',
  'Electricity is a primary energy source',
]

const Home: NextPage = () => {
  return (
    <Layout>

      <section className={styles.card}>
        <header className={styles.card__header}>
          Which of the below statements about electricity is not true?
        </header>
        <body className={styles.card__body}>

          {
            answers.map((answer, key) => (
              <CardAnswer key={key} number={key} string={answer} />
            ))
          }
          
        </body>
      </section>
    </Layout>
  )
}

export default Home
