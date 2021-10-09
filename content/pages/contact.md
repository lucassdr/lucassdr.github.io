---
title: Fale comigo
hide_title: false
sections:
  - section_id: contact-form
    type: section_form
    content: Você pode entrar em contato comigo pelo formulário abaixo ou WhatsApp.
    form_id: contactForm
    form_action: https://formspree.io/f/mleavzak
    form_fields:
      - input_type: text
        name: name
        label: Nome
        default_value: Lucas Teixeira
        is_required: true
      - input_type: email
        name: email
        label: Email
        default_value: lucas@email.com
        is_required: true
      - input_type: select
        name: subject
        label: Assunto
        default_value: Selecione
        options:
          - Site, Sistema ou Aplicativo
          - Redes Sociais
          - Desing Gráfico
          - Other
      - input_type: textarea
        name: message
        label: Mensagem
        default_value: Sua mensagem aqui
      - input_type: checkbox
        name: consent
        label: >-
          Eu entendo que este formulário está armazenando minhas informações enviadas para que eu possa ser contatado.
    submit_label: Enviar mensagem
seo:
  title: Contato
  description: Essa é uma página de contato
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: Contact
      keyName: property
    - name: 'og:description'
      value: Essa é uma página de contato
      keyName: property
    - name: 'twitter:card'
      value: summary
    - name: 'twitter:title'
      value: Contact
    - name: 'twitter:description'
      value: Essa é uma página de contato
layout: advanced
---
