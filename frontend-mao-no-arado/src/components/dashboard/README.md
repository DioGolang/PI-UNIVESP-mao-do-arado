# Dashboard Components

Este diretório contém componentes reutilizáveis para o painel administrativo (dashboard) da aplicação Mão no Arado.

## Componentes Disponíveis

### DashboardLayout

O `DashboardLayout` é um componente de layout responsivo que gerencia a estrutura básica de todas as páginas do dashboard.

**Localização:** `/src/components/layout/DashboardLayout.tsx`

**Características:**
- Gerencia a barra lateral (sidebar) e a barra superior (topbar)
- Adapta-se automaticamente a diferentes tamanhos de tela
- Controla o estado de colapso da barra lateral
- Fornece um overlay para dispositivos móveis quando a barra lateral está aberta
- Inclui um rodapé padrão

**Uso:**
```jsx
import DashboardLayout from "@/components/layout/DashboardLayout";

export default function MinhaSecao() {
  return (
    <DashboardLayout>
      {/* Conteúdo da página */}
      <h1>Minha Seção</h1>
      {/* ... */}
    </DashboardLayout>
  );
}
```

### DashboardCard

O `DashboardCard` é um componente para criar cards consistentes no dashboard.

**Localização:** `/src/components/dashboard/DashboardCard.tsx`

**Características:**
- Design consistente com cabeçalho e rodapé opcionais
- Suporte para ações no cabeçalho
- Estilização adaptada para modo claro e escuro
- Flexibilidade para personalização através de props

**Props:**
- `title`: Título do card (opcional)
- `children`: Conteúdo do card
- `className`: Classes CSS adicionais
- `footer`: Conteúdo do rodapé (opcional)
- `headerAction`: Ações no cabeçalho (opcional)

**Uso:**
```jsx
import DashboardCard from "@/components/dashboard/DashboardCard";

// Card básico
<DashboardCard>
  <p>Conteúdo do card</p>
</DashboardCard>

// Card com título
<DashboardCard title="Meu Card">
  <p>Conteúdo do card</p>
</DashboardCard>

// Card com ação no cabeçalho
<DashboardCard 
  title="Meu Card" 
  headerAction={<button>Ação</button>}
>
  <p>Conteúdo do card</p>
</DashboardCard>

// Card com rodapé
<DashboardCard 
  title="Meu Card" 
  footer={<p>Rodapé do card</p>}
>
  <p>Conteúdo do card</p>
</DashboardCard>
```

### StatCard

O `StatCard` é um componente especializado para exibir estatísticas e métricas.

**Localização:** `/src/components/dashboard/DashboardCard.tsx` (exportado como componente secundário)

**Características:**
- Design otimizado para exibir métricas
- Suporte para ícones
- Indicadores de tendência (para cima, para baixo, neutro)
- Esquemas de cores personalizáveis

**Props:**
- `title`: Título da métrica
- `value`: Valor da métrica
- `description`: Descrição adicional (opcional)
- `icon`: Ícone React (opcional)
- `color`: Cor do card ("blue", "green", "red", "yellow", "purple", "indigo")
- `trend`: Tendência ("up", "down", "neutral")
- `trendValue`: Valor da tendência (ex: "12%")

**Uso:**
```jsx
import { StatCard } from "@/components/dashboard/DashboardCard";
import { FaUsers } from "react-icons/fa";

<StatCard 
  title="Usuários" 
  value="1,234" 
  description="Total de usuários ativos"
  icon={<FaUsers className="w-5 h-5" />}
  color="blue"
  trend="up"
  trendValue="12%"
/>
```

## Sidebar e TopBar

### Sidebar

O componente `Sidebar` exibe a navegação lateral do dashboard.

**Localização:** `/src/components/dashboard/Sidebar.tsx`

**Características:**
- Menu de navegação com ícones
- Estado de colapso controlado
- Destaque para item ativo
- Seção de ajuda

### TopBar

O componente `TopBar` exibe a barra superior do dashboard.

**Localização:** `/src/components/dashboard/TopBar.tsx`

**Características:**
- Botão para alternar a barra lateral
- Campo de pesquisa
- Alternador de tema (claro/escuro)
- Notificações
- Menu de usuário
- Design responsivo para dispositivos móveis

## Template de Seção

Um template completo para criar novas seções do dashboard está disponível em:

**Localização:** `/src/app/dashboard/template-section/page.tsx`

Este template inclui:
- Cabeçalho com botões de ação
- Filtros colapsáveis
- Barra de pesquisa
- Tabela de dados com paginação
- Seção de ajuda

## Boas Práticas

1. **Consistência**: Use sempre o `DashboardLayout` como wrapper para todas as páginas do dashboard.

2. **Componentes Reutilizáveis**: Utilize os componentes `DashboardCard` e `StatCard` para manter a consistência visual.

3. **Responsividade**: Teste todas as páginas em diferentes tamanhos de tela.

4. **Acessibilidade**: Mantenha boas práticas de acessibilidade, como labels em formulários e textos alternativos para imagens.

5. **Tema Escuro**: Certifique-se de que todos os componentes funcionem bem tanto no tema claro quanto no escuro.

## Exemplo de Página Completa

```jsx
"use client";
import DashboardLayout from "@/components/layout/DashboardLayout";
import DashboardCard, { StatCard } from "@/components/dashboard/DashboardCard";
import { FaUsers } from "react-icons/fa";

export default function MinhaSecao() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Minha Seção</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard 
            title="Usuários" 
            value="1,234" 
            description="Total de usuários ativos"
            icon={<FaUsers className="w-5 h-5" />}
            color="blue"
          />
          
          {/* Mais cards aqui */}
        </div>
        
        <DashboardCard title="Conteúdo Principal">
          {/* Conteúdo da seção */}
        </DashboardCard>
      </div>
    </DashboardLayout>
  );
}
```