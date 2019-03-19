export interface RankingResponse {
    rank: string,
    header: string[],
    rows: RankingResponseRow
}

export interface RankingResponseRow {
    rowContent: Object[],
}