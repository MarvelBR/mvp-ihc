// Tela inicial do Meu PSI - Plano de Segurança Individual.

import Image from "next/image";
import Link from "next/link";
import { ClipboardPenLine, HandHeart, Save, ShieldCheck, Users } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { basePath } from "@/lib/base-path";

const actions = [
  {
    title: "Instruções",
    href: "/ajuda",
    icon: HandHeart,
  },
  {
    title: "Plano de Segurança",
    href: "/plano",
    icon: ShieldCheck,
  },
  {
    title: "Motivos para Viver",
    href: "/motivos",
    icon: ClipboardPenLine,
  },
];

/**
 * Renderiza a tela inicial com a imagem principal e atalhos do sistema.
 *
 * Entrada:
 * - nao recebe parametros externos.
 *
 * Variaveis usadas:
 * - actions: define titulo, link e icone de cada card de atalho.
 *
 * Saida:
 * - componente React com os botoes para registro, plano e instrucoes.
 */
export default function Home() {
  return (
    <main className="page-shell">
      <section className="space-y-8">
        <div className="page-header">
          <h1 className="page-title">Olá, Profissional da Saúde!</h1>
        </div>

        <div className="mx-auto flex h-72 max-w-3xl items-center justify-center rounded-lg bg-[#c3cfe2] dark:bg-card">
          <Image
            src={`${basePath}/medico.png`}
            alt="Profissional de saúde"
            width={300}
            height={300}
            priority
            className="h-full w-auto object-contain"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {actions.map((action) => {
            const Icon = action.icon;
            return (
              <Link key={action.href} href={action.href}>
                <Card className="h-full transition hover:-translate-y-1 hover:shadow-lg">
                  <CardContent className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
                    <div className="icon-badge">
                      <Icon className="size-7" />
                    </div>
                    <h2 className="text-xl font-semibold text-slate-800">
                      {action.title}
                    </h2>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}