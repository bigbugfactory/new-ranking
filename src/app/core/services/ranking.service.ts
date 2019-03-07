import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RankingService {

  id_url:string = 'b6ed26b7-7352-41df-98fd-947bfef1a49d';
  query_url:string = 'LDDFnDrHsxDhH5Cfz6Iu4ta3MHObrONtzflsfRj58qhuihzsqkKza71XE0E15zBulDMZznrCeyqKb0IuKE1odMPj4ORDliY%2B4QeTsC%2F7eFAqSJex6tV2ZVFljupQ0jmF46hqVggMG8cYZHdaZhESZE%2FzyOleqYPnyiE0%2FIwonf1ahi1dv%2BcJPgufK2Pm9TL71Nc%2F6gdikXrmE948zqPlX%2FmEJCNO0pVjFvp7M1o2%2FYdUXFUw44AmsstAF5OScdiaZCw6kv2o5qCkrYcff9CcASxuYQtncWv5cU48F5gsGysEkv8Mpnj7ca%2Fhjb6%2BOxGPLBo5Ybq%2BTBQEIVtPbLXA2p1YDae415mHGEgYEgRsrITy2tYYuCLTFzcurifwqSIk2PoBZ2Gn4JFzhPFCRPT8cgk136Udso2GrwcidyRKTLy%2FqLhFLyevmm1MW0Ph3bYCc0udOYIuKlUdsJTvMOESN9bdZpa2x%2BnFfHK5fU9sVVQqzmNdQUYZtERG6im1C268RQzRozT0IaqatOPy050J8f018SonJ1f%2BP6X4rO86CPrbiLUz5d7PXPelO717nhDI%2FSCevolAgqhf8X%2Bg3a1L2J6AUsvnM5808CxdpYY9ho0%3D';
  rankingUrl:string = '/api/ranking/b6ed26b7-7352-41df-98fd-947bfef1a49d?query=LDDFnDrHsxDhH5Cfz6Iu4ta3MHObrONtzflsfRj58qhuihzsqkKza71XE0E15zBulDMZznrCeyqKb0IuKE1odMPj4ORDliY%2B4QeTsC%2F7eFAqSJex6tV2ZVFljupQ0jmF46hqVggMG8cYZHdaZhESZE%2FzyOleqYPnyiE0%2FIwonf1ahi1dv%2BcJPgufK2Pm9TL71Nc%2F6gdikXrmE948zqPlX%2FmEJCNO0pVjFvp7M1o2%2FYdUXFUw44AmsstAF5OScdiaZCw6kv2o5qCkrYcff9CcASxuYQtncWv5cU48F5gsGysEkv8Mpnj7ca%2Fhjb6%2BOxGPLBo5Ybq%2BTBQEIVtPbLXA2p1YDae415mHGEgYEgRsrITy2tYYuCLTFzcurifwqSIk2PoBZ2Gn4JFzhPFCRPT8cgk136Udso2GrwcidyRKTLy%2FqLhFLyevmm1MW0Ph3bYCc0udOYIuKlUdsJTvMOESN9bdZpa2x%2BnFfHK5fU9sVVQqzmNdQUYZtERG6im1C268RQzRozT0IaqatOPy050J8f018SonJ1f%2BP6X4rO86CPrbiLUz5d7PXPelO717nhDI%2FSCevolAgqhf8X%2Bg3a1L2J6AUsvnM5808CxdpYY9ho0%3D';

  constructor(private http:Http) { }

  getRanking() {
    return this.http.get(this.rankingUrl).pipe(
      map((response:Response) => {
        return response.json();
      })
    );
  }
}
