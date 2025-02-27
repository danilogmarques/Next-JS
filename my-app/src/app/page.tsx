import { Metadata } from "next"

export const metadata: Metadata = {
  title : "Home - Aula Next JS do zero!",
  description : "Aprendendo Next JS do zero com sujeito programador!",
  openGraph : {
    title: "Aprendendo Next JS !",
    description: "Dando meus próximos passos na carreira de desenvolvedor",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true, 
      follow: true,
    }
  }

}

export default function Home(){
  return(
    <div>
      <h1>Boa Tarde</h1>

    </div>
  )
}