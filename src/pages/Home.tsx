import { useAnalyze } from '../hooks/useAnalyze';
import { UrlInput } from '../components/UrlInput';
import { PalettePreview } from '../components/PalettePreview';
import { TypographyPreview } from '../components/TypographyPreview';
import { OutputTabs } from '../components/OutputTabs';
import { DownloadButton } from '../components/DownloadButton';

export function Home() {
  const { analyze, result, loading, error } = useAnalyze();

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <UrlInput onSubmit={analyze} loading={loading} />
      {error && <p role="alert" className="text-red-600">{error}</p>}
      {result && (
        <>
          <PalettePreview palette={result.palette} />
          <TypographyPreview typography={result.typography} />
          <OutputTabs analysis={result} />
          <DownloadButton url={result.downloadUrl} />
        </>
      )}
    </main>
  );
}
