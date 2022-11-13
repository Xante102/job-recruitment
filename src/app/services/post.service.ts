import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, take } from 'rxjs'
import { environment } from 'src/environments/environment'
import { GenericSubscribe } from '../interfaces/default'
import { JSONResponse } from '../interfaces/json.interface'

@Injectable({
	providedIn: 'root',
})
export class PostService {
	baseUrl: string = environment.apiUrl + '/posts'
	constructor(private http: HttpClient) {}

	/**
	 * Http request to register a new post
	 * @returns Observable
	 */
	create(post: Post) {
		let obs = new Observable<Post>((observer) => {
			this.http
				.post<JSONResponse<Post>>(this.baseUrl, post, {
					withCredentials: true,
				})
				.pipe(take(1))
				.subscribe(GenericSubscribe(observer))
		})

		return obs
	}

	/**
	 * Http request to get posts
	 * @returns Observable
	 */
	get(
		page: number,
		limit: number,
		filterFields?: string[],
		filterVals?: string[]
	) {
		let filterString: string = ''
		if (
			filterFields &&
			filterVals &&
			filterFields.length == filterVals.length
		) {
			filterFields.forEach((e, index) => {
				filterString += `&field=${e}&value=${filterVals[index]}`
			})
		}
		let obs = new Observable<Post[]>((observer) => {
			this.http
				.get<JSONResponse<Post[]>>(
					this.baseUrl +
						`?page=${page}&limit=${limit}${filterString}`,
					{
						withCredentials: true,
					}
				)
				.pipe(take(1))
				.subscribe(GenericSubscribe(observer))
		})

		return obs
	}

	/**
	 * Http request for a single post by ID
	 * @returns Observable
	 */
	getOne(id: string) {
		let obs = new Observable<Post>((observer) => {
			this.http
				.get<JSONResponse<Post>>(this.baseUrl + `/${id}`, {
					withCredentials: true,
				})
				.pipe(take(1))
				.subscribe(GenericSubscribe(observer))
		})

		return obs
	}

	/**
	 * Http request to update a post by ID
	 * @returns Observable
	 */
	patch(post: Partial<Post>, id: string) {
		let obs = new Observable<Post>((observer) => {
			this.http
				.patch<JSONResponse<Post>>(this.baseUrl + `/${id}`, post, {
					withCredentials: true,
				})
				.pipe(take(1))
				.subscribe(GenericSubscribe(observer))
		})

		return obs
	}

	/**
	 * Http request to delete a post by ID
	 * @returns Observable
	 */
	delete(id: string) {
		let obs = new Observable<null>((observer) => {
			this.http
				.delete<JSONResponse<null>>(this.baseUrl + `/${id}`, {
					withCredentials: true,
				})
				.pipe(take(1))
				.subscribe(GenericSubscribe(observer))
		})

		return obs
	}
}
