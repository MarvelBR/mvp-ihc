"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle, Download, Home, Printer, ShieldCheck } from "lucide-react";

import { SafetyTips } from "@/components/safety-tips";
import { Button } from "@/components/ui/button";
import { getSafetyPlan } from "@/lib/local-database";
import { generateSafetyPlanPdf } from "@/lib/generate-safety-plan-pdf";

/**
 * Mostra a confirmacao final apos salvar o plano de seguranca.
 *
 * Entrada:
 * - nao recebe parametros.
 *
 * Variaveis usadas:
 * - window.print: aciona a impressao do plano quando o usuario clica no botao.
 * - downloadError: indica quando o plano nao foi encontrado para gerar o PDF.
 *
 * Saida:
 * - tela de sucesso com botoes para voltar ao inicio, imprimir ou baixar PDF.
 */
export default function PlanoSucessoPage() {
  const [downloadError, setDownloadError] = useState(false);

  async function handleDownloadPdf() {
    const plan = await getSafetyPlan();

    if (!plan) {
      setDownloadError(true);
      return;
    }

    setDownloadError(false);
    generateSafetyPlanPdf(plan);
  }

  return (
    <main className="page-shell">
      <section className="page-header">
        <h1 className="page-title">
          <ShieldCheck className="size-8 text-primary" />
          Plano de Segurança
        </h1>
        <p className="page-subtitle">
          Ajude o paciente quando ele está com tendências suicidas.
        </p>
      </section>

      <section className="form-panel text-center">
        <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-emerald-600 text-white">
          <CheckCircle className="size-8" />
        </div>
        <h2 className="text-2xl font-semibold text-slate-800">
          Plano salvo com sucesso!
        </h2>

        {downloadError && (
          <p className="mt-4 text-sm text-red-600">
            Não foi possível encontrar um plano salvo para gerar o PDF.
          </p>
        )}

        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild variant="secondary">
            <Link href="/">
              <Home />
              Voltar à tela inicial
            </Link>
          </Button>
          <Button variant="success" onClick={handleDownloadPdf}>
            <Download />
            Baixar PDF
          </Button>
          <Button variant="success" onClick={async () => {
            const plan = await getSafetyPlan();
            if (!plan) { setDownloadError(true); return; }
            setDownloadError(false);
            generateSafetyPlanPdf(plan);
          }}>
            <Printer />
            Imprimir Plano
          </Button>
        </div>
      </section>

      <SafetyTips />
    </main>
  );
}