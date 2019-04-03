export interface RankingResponse {
    rank: string,
    name: string,
    describtion: string,
    header: string[],
    rows: RankingResponseRow
}

export interface RankingResponseRow {
    rowContent: Object[],
}
