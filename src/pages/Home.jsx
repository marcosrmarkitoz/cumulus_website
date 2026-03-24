import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ContentZone from '../components/ContentZone';
import CTAButton from '../components/CTAButton';
import { Shield, CreditCard, PieChart, TrendingUp, ArrowRight } from 'lucide-react';

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <ContentZone id="home-hero" minHeight="500px">
        <section style={{
          background: 'linear-gradient(135deg, var(--cumulus-primary) 0%, var(--cumulus-secondary) 100%)',
          color: 'white',
          padding: '6rem 0',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <motion.div 
              style={{ maxWidth: '600px' }}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 style={{ color: 'white', fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                Sua vida financeira nas nuvens.
              </h1>
              <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.5 }}>
                Simplicidade, transparência e a segurança que você precisa para conquistar seus objetivos. Abra sua conta em minutos.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <CTAButton actionName="hero_open_account">Abrir conta grátis</CTAButton>
                <CTAButton variant="outline" actionName="hero_learn_more">Conheça nossos planos</CTAButton>
              </div>
            </motion.div>
          </div>
          {/* Abstract Cloud Shapes */}
          <div style={{
            position: 'absolute',
            right: '-10%',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '600px',
            height: '400px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '100%',
            filter: 'blur(80px)',
            zIndex: 1
          }}></div>
        </section>
      </ContentZone>

      {/* Features / Quick Links */}
      <section style={{ backgroundColor: 'white' }}>
        <div className="container">
          <div className="grid" style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            {[
              { icon: <CreditCard />, title: 'Cartão de Crédito', desc: 'Sem anuidade e com cashback em todas as compras.' },
              { icon: <Shield />, title: 'Seguros', desc: 'Proteção para você, sua família e seus bens mais preciosos.' },
              { icon: <TrendingUp />, title: 'Investimentos', desc: 'Rentabilidade acima da média com curadoria de especialistas.' },
              { icon: <PieChart />, title: 'Planejamento', desc: 'Ferramentas de IA para ajudar você a poupar e investir.' }
            ].map((feature, i) => (
              <motion.div 
                key={i} 
                style={{
                  padding: '2rem',
                  borderRadius: '16px',
                  backgroundColor: 'var(--cumulus-cloud)',
                  transition: 'var(--cumulus-transition)',
                  cursor: 'pointer'
                }}
                {...fadeInUp}
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: 'white',
                  boxShadow: 'var(--shadow-lg)'
                }}
              >
                <div style={{ 
                  color: 'var(--cumulus-secondary)', 
                  marginBottom: '1rem',
                  display: 'inline-flex',
                  padding: '0.75rem',
                  backgroundColor: 'white',
                  borderRadius: '12px'
                }}>
                  {feature.icon}
                </div>
                <h3 style={{ marginBottom: '0.5rem' }}>{feature.title}</h3>
                <p style={{ color: 'var(--cumulus-gray)', fontSize: '0.95rem' }}>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Personalized Section */}
      <section style={{ backgroundColor: 'var(--cumulus-bg-gray)' }}>
        <div className="container text-center">
          <motion.h2 style={{ marginBottom: '3rem' }} {...fadeInUp}>Oportunidades para você</motion.h2>
          <ContentZone id="home-product-recommendation" minHeight="300px">
            <div className="grid" style={{
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem'
            }}>
              <motion.div 
                style={{
                  backgroundColor: 'white',
                  padding: '2rem',
                  borderRadius: '20px',
                  boxShadow: 'var(--shadow-md)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
                {...fadeInUp}
              >
                <img src="https://images.unsplash.com/photo-1550565118-3d1428df73b0?auto=format&fit=crop&q=80&w=400" 
                     alt="Consórcio" 
                     style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '12px', marginBottom: '1.5rem' }} />
                <h3>Consórcio Cumulus</h3>
                <p style={{ margin: '1rem 0', color: 'var(--cumulus-gray)' }}>A forma mais inteligente de planejar sua próxima conquista.</p>
                <CTAButton variant="secondary" actionName="home_rec_consortium">Ver simulação</CTAButton>
              </motion.div>
              
              <motion.div 
                style={{
                  backgroundColor: 'white',
                  padding: '2rem',
                  borderRadius: '20px',
                  boxShadow: 'var(--shadow-md)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
                {...fadeInUp}
              >
                <img src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=400" 
                     alt="Investimentos" 
                     style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '12px', marginBottom: '1.5rem' }} />
                <h3>CDB Liquidez Diária</h3>
                <p style={{ margin: '1rem 0', color: 'var(--cumulus-gray)' }}>Rendendo 110% do CDI. O melhor lugar para sua reserva.</p>
                <CTAButton variant="secondary" actionName="home_rec_investment">Investir agora</CTAButton>
              </motion.div>
            </div>
          </ContentZone>
        </div>
      </section>

      {/* Articles Section */}
      <section style={{ backgroundColor: 'white' }}>
        <div className="container">
          <motion.div className="flex items-center justify-between mb-4" {...fadeInUp}>
            <h2>Dicas Financeiras</h2>
            <Link to="#" style={{ color: 'var(--cumulus-secondary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              Ver todos <ArrowRight size={18} />
            </Link>
          </motion.div>
          <ContentZone id="home-articles" minHeight="250px">
            <div className="grid" style={{
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '2rem'
            }}>
              {[
                { title: '5 passos para começar a investir do zero', category: 'Educação' },
                { title: 'Como proteger seu patrimônio em tempos de inflação', category: 'Mercado' },
                { title: 'Os benefícios de ter um cartão Black na Cumulus', category: 'Estilo de Vida' }
              ].map((article, i) => (
                <motion.div key={i} style={{ borderBottom: '1px solid #eee', paddingBottom: '1.5rem' }} {...fadeInUp}>
                  <span style={{ 
                    fontSize: '0.75rem', 
                    fontWeight: 700, 
                    textTransform: 'uppercase', 
                    color: 'var(--cumulus-secondary)',
                    letterSpacing: '0.05em'
                  }}>{article.category}</span>
                  <h3 style={{ marginTop: '0.5rem', fontSize: '1.2rem', color: 'var(--cumulus-dark)' }}>{article.title}</h3>
                </motion.div>
              ))}
            </div>
          </ContentZone>
        </div>
      </section>
    </div>
  );
};

export default Home;
