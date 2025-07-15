// Templates de email profissionais para automação
export const EMAIL_TEMPLATES = {
  // Template 1: Boas-vindas + Material gratuito
  welcome: {
    subject: "🎉 Bem-vindo ao AffiliateFlow! Seu material está aqui",
    html: `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Bem-vindo ao AffiliateFlow</title>
    </head>
    <body style="margin: 0; padding: 0; background-color: #0B1426; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
      
      <!-- Header -->
      <table width="100%" cellspacing="0" cellpadding="0" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
        <tr>
          <td style="padding: 40px 20px; text-align: center;">
            <h1 style="color: white; font-size: 28px; margin: 0; font-weight: bold;">
              🎉 Parabéns, {{NAME}}!
            </h1>
            <p style="color: rgba(255,255,255,0.9); font-size: 16px; margin: 10px 0 0 0;">
              Você acaba de dar o primeiro passo para a liberdade financeira
            </p>
          </td>
        </tr>
      </table>

      <!-- Main Content -->
      <table width="100%" cellspacing="0" cellpadding="0" style="background-color: #F8FAFC;">
        <tr>
          <td style="padding: 40px 20px;">
            <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 16px; padding: 40px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
              
              <!-- Welcome Message -->
              <h2 style="color: #0B1426; font-size: 24px; margin: 0 0 20px 0; text-align: center;">
                Bem-vindo à comunidade AffiliateFlow Premium! 🚀
              </h2>
              
              <p style="color: #4A5568; font-size: 16px; line-height: 1.6; margin: 0 0 30px 0;">
                Olá {{NAME}}, você acaba de se juntar a mais de <strong>2.847 pessoas</strong> que estão transformando suas vidas financeiras com nosso sistema automatizado.
              </p>

              <!-- Benefits Box -->
              <div style="background: linear-gradient(135deg, #F093FB 0%, #F5576C 100%); border-radius: 12px; padding: 30px; margin: 30px 0;">
                <h3 style="color: white; font-size: 20px; margin: 0 0 20px 0; text-align: center;">
                  🎁 MATERIAL EXCLUSIVO LIBERADO
                </h3>
                
                <div style="background: rgba(255,255,255,0.1); border-radius: 8px; padding: 20px;">
                  <div style="color: white; font-size: 14px; margin: 10px 0;">
                    ✓ <strong>Ebook:</strong> "7 Estratégias Para R$ 10k+ em 30 Dias"
                  </div>
                  <div style="color: white; font-size: 14px; margin: 10px 0;">
                    ✓ <strong>Planilha:</strong> Controle de Ganhos Profissional
                  </div>
                  <div style="color: white; font-size: 14px; margin: 10px 0;">
                    ✓ <strong>Acesso VIP:</strong> Grupo Exclusivo no Telegram
                  </div>
                  <div style="color: white; font-size: 14px; margin: 10px 0;">
                    ✓ <strong>Bônus:</strong> Template de Stories Prontos
                  </div>
                </div>
                
                <!-- CTA Button -->
                <div style="text-align: center; margin: 30px 0 0 0;">
                  <a href="{{DOWNLOAD_LINK}}" style="display: inline-block; background: white; color: #F5576C; padding: 15px 30px; border-radius: 50px; text-decoration: none; font-weight: bold; font-size: 16px; box-shadow: 0 5px 15px rgba(0,0,0,0.2);">
                    📥 BAIXAR MATERIAL COMPLETO
                  </a>
                </div>
              </div>

              <!-- Next Steps -->
              <div style="background: #F7FAFC; border-radius: 12px; padding: 30px; margin: 30px 0;">
                <h3 style="color: #0B1426; font-size: 18px; margin: 0 0 20px 0;">
                  📋 Próximos passos (muito importante!)
                </h3>
                
                <div style="color: #4A5568; font-size: 14px; margin: 15px 0;">
                  <strong>1️⃣ Baixe o aplicativo oficial</strong><br>
                  Disponível para Android e iOS. É onde tudo acontece!
                </div>
                
                <div style="color: #4A5568; font-size: 14px; margin: 15px 0;">
                  <strong>2️⃣ Entre no grupo VIP</strong><br>
                  Mais de 2.847 afiliados compartilhando estratégias diariamente.
                </div>
                
                <div style="color: #4A5568; font-size: 14px; margin: 15px 0;">
                  <strong>3️⃣ Implemente as estratégias</strong><br>
                  Siga o passo-a-passo do material. Resultados em 7-14 dias.
                </div>
              </div>

              <!-- Social Proof -->
              <div style="border-left: 4px solid #28A745; padding: 20px; margin: 30px 0; background: #F0FDF4;">
                <p style="color: #166534; font-size: 14px; margin: 0; font-style: italic;">
                  "Em apenas 30 dias consegui R$ 15.200. Nunca pensei que seria possível ganhar tanto trabalhando de casa!"
                </p>
                <p style="color: #166534; font-size: 12px; margin: 10px 0 0 0; font-weight: bold;">
                  — Maria Santos, São Paulo/SP
                </p>
              </div>

              <!-- Footer Message -->
              <div style="text-align: center; margin: 30px 0 0 0;">
                <p style="color: #4A5568; font-size: 14px; margin: 0;">
                  Nos próximos dias você receberá:
                </p>
                <p style="color: #4A5568; font-size: 14px; margin: 5px 0;">
                  📈 Cases reais • 🎯 Estratégias avançadas • 🚀 Oportunidades exclusivas
                </p>
              </div>

            </div>
          </td>
        </tr>
      </table>

      <!-- Footer -->
      <table width="100%" cellspacing="0" cellpadding="0" style="background-color: #0B1426;">
        <tr>
          <td style="padding: 30px 20px; text-align: center;">
            <p style="color: rgba(248,250,252,0.6); font-size: 12px; margin: 0;">
              AffiliateFlow Premium • Transformando vidas desde 2024
            </p>
            <p style="color: rgba(248,250,252,0.6); font-size: 12px; margin: 5px 0 0 0;">
              Você está recebendo este email porque se cadastrou em nosso site.
            </p>
          </td>
        </tr>
      </table>

    </body>
    </html>
    `,
    text: `
Olá {{NAME}}!

Bem-vindo ao AffiliateFlow Premium! 🎉

Você acaba de se juntar a mais de 2.847 pessoas que estão transformando suas vidas financeiras.

MATERIAL EXCLUSIVO LIBERADO:
✓ Ebook: "7 Estratégias Para R$ 10k+ em 30 Dias"
✓ Planilha de Controle de Ganhos
✓ Acesso ao Grupo VIP no Telegram
✓ Bônus: Templates de Stories

Baixe agora: {{DOWNLOAD_LINK}}

Próximos passos:
1. Baixe o aplicativo oficial
2. Entre no grupo VIP  
3. Implemente as estratégias

Um abraço,
Equipe AffiliateFlow
    `
  },

  // Template 2: Prova social + urgência
  socialProof: {
    subject: "💰 Como Maria ganhou R$ 25.000 em 30 dias (CASO REAL)",
    html: `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Caso de Sucesso Real</title>
    </head>
    <body style="margin: 0; padding: 0; background-color: #0B1426; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
      
      <!-- Header with urgency -->
      <table width="100%" cellspacing="0" cellpadding="0" style="background: #FF6F00;">
        <tr>
          <td style="padding: 20px; text-align: center;">
            <p style="color: white; font-size: 14px; margin: 0; font-weight: bold;">
              🔥 ATENÇÃO {{NAME}} - Você precisa ver isso!
            </p>
          </td>
        </tr>
      </table>

      <!-- Main Content -->
      <table width="100%" cellspacing="0" cellpadding="0" style="background-color: #F8FAFC;">
        <tr>
          <td style="padding: 40px 20px;">
            <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 16px; padding: 40px;">
              
              <h1 style="color: #0B1426; font-size: 28px; margin: 0 0 20px 0; text-align: center;">
                💰 R$ 25.847 em apenas 30 dias!
              </h1>
              
              <p style="color: #4A5568; font-size: 16px; line-height: 1.6;">
                Enquanto você lê este email, Maria Santos está comemorando seus resultados extraordinários...
              </p>

              <!-- Case Study -->
              <div style="background: linear-gradient(135deg, #28A745 0%, #20C997 100%); border-radius: 12px; padding: 30px; margin: 30px 0; color: white;">
                <div style="text-align: center; margin-bottom: 20px;">
                  <div style="font-size: 36px; font-weight: bold;">R$ 25.847</div>
                  <div style="font-size: 16px; opacity: 0.9;">em apenas 30 dias</div>
                </div>
                
                <blockquote style="margin: 20px 0; padding: 20px; background: rgba(255,255,255,0.1); border-radius: 8px; border-left: 4px solid white;">
                  <p style="margin: 0; font-style: italic; font-size: 16px;">
                    "Nunca pensei que seria possível. Em 4 semanas já paguei todas as minhas dívidas e ainda sobrou para investir. O sistema realmente funciona!"
                  </p>
                  <footer style="margin-top: 15px; font-size: 14px; opacity: 0.9;">
                    — Maria Santos, 34 anos, São Paulo/SP
                  </footer>
                </blockquote>
              </div>

              <!-- More Results -->
              <h3 style="color: #0B1426; font-size: 20px; margin: 30px 0 20px 0;">
                🏆 RESULTADOS REAIS DE OUTROS AFILIADOS:
              </h3>
              
              <div style="background: #F7FAFC; border-radius: 12px; padding: 25px; margin: 20px 0;">
                <div style="margin: 15px 0; padding: 15px; background: white; border-radius: 8px;">
                  <strong style="color: #0B1426;">João Pedro:</strong> 
                  <span style="color: #28A745; font-weight: bold;">R$ 15.230/mês</span>
                  <div style="color: #4A5568; font-size: 14px;">Iniciou em fevereiro</div>
                </div>
                
                <div style="margin: 15px 0; padding: 15px; background: white; border-radius: 8px;">
                  <strong style="color: #0B1426;">Ana Clara:</strong> 
                  <span style="color: #28A745; font-weight: bold;">R$ 31.500/mês</span>
                  <div style="color: #4A5568; font-size: 14px;">Iniciou em janeiro</div>
                </div>
                
                <div style="margin: 15px 0; padding: 15px; background: white; border-radius: 8px;">
                  <strong style="color: #0B1426;">Ricardo Mendes:</strong> 
                  <span style="color: #28A745; font-weight: bold;">R$ 18.750/mês</span>
                  <div style="color: #4A5568; font-size: 14px;">Iniciou em março</div>
                </div>
              </div>

              <!-- What makes the difference -->
              <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px; padding: 30px; margin: 30px 0; color: white;">
                <h3 style="margin: 0 0 20px 0; text-align: center;">
                  O que eles fizeram de diferente?
                </h3>
                
                <div style="margin: 15px 0;">
                  👉 Usaram o <strong>MESMO sistema</strong> que está disponível para você
                </div>
                <div style="margin: 15px 0;">
                  👉 Seguiram o passo-a-passo exato (<strong>sem inventar</strong>)
                </div>
                <div style="margin: 15px 0;">
                  👉 Aplicaram as estratégias por <strong>30 dias consistentes</strong>
                </div>
              </div>

              <!-- CTA -->
              <div style="text-align: center; margin: 40px 0;">
                <p style="color: #4A5568; font-size: 16px; margin: 0 0 20px 0;">
                  Você está a 1 clique de começar sua transformação:
                </p>
                
                <a href="{{APP_DOWNLOAD_LINK}}" style="display: inline-block; background: linear-gradient(135deg, #FF6F00 0%, #FF8F00 100%); color: white; padding: 20px 40px; border-radius: 50px; text-decoration: none; font-weight: bold; font-size: 18px; box-shadow: 0 8px 25px rgba(255,111,0,0.3);">
                  📱 BAIXAR APLICATIVO AGORA
                </a>
              </div>

              <!-- Urgency footer -->
              <div style="text-align: center; background: #FFF3CD; border: 1px solid #FFEAA7; border-radius: 8px; padding: 20px; margin: 30px 0;">
                <p style="color: #856404; font-size: 14px; margin: 0; font-weight: bold;">
                  ⚠️ Não deixe para depois. Quanto mais você espera, mais dinheiro está perdendo.
                </p>
              </div>

            </div>
          </td>
        </tr>
      </table>

    </body>
    </html>
    `
  },

  // Template 3: Escassez + urgência
  urgency: {
    subject: "⏰ ÚLTIMAS 48h - Programa VIP encerrando",
    html: `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Última Chance - Programa VIP</title>
    </head>
    <body style="margin: 0; padding: 0; background-color: #0B1426; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
      
      <!-- Urgent Header -->
      <table width="100%" cellspacing="0" cellpadding="0" style="background: #DC2626;">
        <tr>
          <td style="padding: 20px; text-align: center;">
            <h1 style="color: white; font-size: 24px; margin: 0; animation: blink 1s infinite;">
              ⏰ ATENÇÃO {{NAME}}!
            </h1>
            <p style="color: white; font-size: 16px; margin: 5px 0 0 0;">
              Restam apenas 48 horas para garantir sua vaga
            </p>
          </td>
        </tr>
      </table>

      <!-- Countdown Visual -->
      <table width="100%" cellspacing="0" cellpadding="0" style="background: #FF6F00;">
        <tr>
          <td style="padding: 20px; text-align: center;">
            <div style="color: white; font-size: 18px; font-weight: bold;">
              🚨 ÚLTIMAS 127 VAGAS DISPONÍVEIS
            </div>
          </td>
        </tr>
      </table>

      <!-- Main Content -->
      <table width="100%" cellspacing="0" cellpadding="0" style="background-color: #F8FAFC;">
        <tr>
          <td style="padding: 40px 20px;">
            <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 16px; padding: 40px;">
              
              <h2 style="color: #0B1426; font-size: 24px; margin: 0 0 20px 0; text-align: center;">
                Por que a pressa, {{NAME}}?
              </h2>
              
              <p style="color: #4A5568; font-size: 16px; line-height: 1.6;">
                O Programa VIP tem acompanhamento personalizado e por isso <strong>limitamos a 500 pessoas por turma</strong>.
              </p>

              <p style="color: #4A5568; font-size: 16px; line-height: 1.6;">
                A turma de março está <span style="color: #DC2626; font-weight: bold;">95% lotada</span> e as últimas vagas estão sendo preenchidas rapidamente.
              </p>

              <!-- VIP Benefits -->
              <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px; padding: 30px; margin: 30px 0; color: white;">
                <h3 style="margin: 0 0 25px 0; text-align: center; font-size: 22px;">
                  🎯 NO PROGRAMA VIP VOCÊ TEM:
                </h3>
                
                <div style="margin: 15px 0; display: flex; align-items: center;">
                  <span style="margin-right: 10px;">✓</span>
                  <span><strong>Mentoria individual</strong> comigo toda semana</span>
                </div>
                <div style="margin: 15px 0; display: flex; align-items: center;">
                  <span style="margin-right: 10px;">✓</span>
                  <span><strong>Grupo exclusivo</strong> com os TOP afiliados</span>
                </div>
                <div style="margin: 15px 0; display: flex; align-items: center;">
                  <span style="margin-right: 10px;">✓</span>
                  <span><strong>Material avançado</strong> (não disponível na versão gratuita)</span>
                </div>
                <div style="margin: 15px 0; display: flex; align-items: center;">
                  <span style="margin-right: 10px;">✓</span>
                  <span><strong>Suporte prioritário</strong> 24/7</span>
                </div>
                <div style="margin: 15px 0; display: flex; align-items: center;">
                  <span style="margin-right: 10px;">✓</span>
                  <span><strong>Garantia de resultados</strong> em 60 dias</span>
                </div>
              </div>

              <!-- Previous Results -->
              <div style="background: #F0FDF4; border: 2px solid #28A745; border-radius: 12px; padding: 25px; margin: 30px 0;">
                <h4 style="color: #166534; margin: 0 0 15px 0; text-align: center;">
                  💡 A turma anterior (fevereiro) teve:
                </h4>
                
                <div style="text-align: center;">
                  <div style="color: #166534; font-size: 18px; margin: 10px 0;">
                    <strong>94% de taxa de sucesso</strong>
                  </div>
                  <div style="color: #166534; font-size: 18px; margin: 10px 0;">
                    <strong>Ganho médio de R$ 22.340/mês</strong>
                  </div>
                  <div style="color: #166534; font-size: 18px; margin: 10px 0;">
                    <strong>ROI de 850% em 90 dias</strong>
                  </div>
                </div>
              </div>

              <!-- Special Offer -->
              <div style="background: linear-gradient(135deg, #F093FB 0%, #F5576C 100%); border-radius: 12px; padding: 30px; margin: 30px 0; color: white; text-align: center;">
                <h3 style="margin: 0 0 20px 0; font-size: 22px;">
                  ⚡ OFERTA ESPECIAL (próximas 48h):
                </h3>
                
                <div style="font-size: 16px; opacity: 0.9; text-decoration: line-through; margin-bottom: 10px;">
                  De R$ 1.997
                </div>
                
                <div style="font-size: 32px; font-weight: bold; margin-bottom: 20px;">
                  apenas 12x de R$ 97
                </div>
                
                <div style="font-size: 14px; opacity: 0.9;">
                  ou R$ 997 à vista (economize R$ 167)
                </div>
              </div>

              <!-- Final CTA -->
              <div style="text-align: center; margin: 40px 0;">
                <a href="{{VIP_SIGNUP_LINK}}" style="display: inline-block; background: #28A745; color: white; padding: 20px 40px; border-radius: 50px; text-decoration: none; font-weight: bold; font-size: 20px; box-shadow: 0 8px 25px rgba(40,167,69,0.4); animation: pulse 2s infinite;">
                  🚀 GARANTIR MINHA VAGA AGORA
                </a>
                
                <p style="color: #DC2626; font-size: 14px; margin: 20px 0 0 0; font-weight: bold;">
                  ⚠️ Após 48h o valor volta para R$ 1.997
                </p>
              </div>

              <!-- Risk Reversal -->
              <div style="background: #FFF3CD; border: 1px solid #FFEAA7; border-radius: 8px; padding: 20px; margin: 30px 0;">
                <h4 style="color: #856404; margin: 0 0 10px 0; text-align: center;">
                  🛡️ GARANTIA TOTAL DE 60 DIAS
                </h4>
                <p style="color: #856404; font-size: 14px; margin: 0; text-align: center;">
                  Se em 60 dias você não tiver pelo menos 3x o seu investimento de volta, devolvemos 100% do seu dinheiro. Sem perguntas.
                </p>
              </div>

            </div>
          </td>
        </tr>
      </table>

    </body>
    </html>
    `
  }
};

// Configurações de automação
export const AUTOMATION_CONFIG = {
  sequences: {
    welcome_sequence: {
      name: 'Sequência de Boas-vindas',
      emails: [
        { template: 'welcome', delay: 0 },
        { template: 'socialProof', delay: 24 },
        { template: 'urgency', delay: 48 }
      ]
    }
  },
  
  triggers: {
    lead_capture: 'welcome_sequence',
    app_download: 'activation_sequence',
    verification: 'engagement_sequence'
  }
};