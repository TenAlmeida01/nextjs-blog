import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Profissional com mais de 8 anos de experiência em Tecnologia da Informação, Gestão e Segurança Pública, com amplo conhecimento em Segurança Privada, Sistemas ERP, Budget, Análise e Gerenciamento de Riscos. Me formei em Análise e Desenvolvimento de Sistemas e concluí duas pós-graduações, em Engenharia de Computação e Deep Learning.
          Atualmente, trabalho como Gestor de Contratos em uma empresa de facilities e segurança privada com cerca de 7 mil colaboradores. Minha função consiste em gerenciar a execução dos contratos sob minha responsabilidade, conduzir negociações contratuais, acompanhar a prestação de serviços e realizar treinamentos para os colaboradores.
          Tenho experiência em apresentar resultados da operação e indicadores para a diretoria, elaborar planos de ação para reduzir custos e solucionar problemas na operação, gerar relatórios, controlar o faturamento, confeccionar contratos e aditivos, bem como sou responsável pela implantação de novos contratos e pelo relacionamento com o cliente.
        </p>

      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
        {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}