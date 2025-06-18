export default function stripDevBlocks() {
  const tagPatterns = ['@debug', '@devlog', '@assert'];

  return {
    name: 'strip-dev-blocks',
    transform(code: string, id: string) {
      if (!id.match(/\.(ts|js|svelte)$/)) return;

      const regex = new RegExp(
        `(^|\\n)\\s*(//\\s*(?:${tagPatterns.join('|')}))[^\\n]*(\\n|$)`,
        'g'
      );

      return {
        code: code.replace(regex, ''),
        map: null
      };
    }
  };
}
