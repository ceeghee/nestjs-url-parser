import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { load } from "cheerio"
import * as  puppeteer from "puppeteer";
import * as  NodeCache from "node-cache";
@Injectable()
export class ScrapperService {
	private readonly myCache;
	constructor() {
		this.myCache = new NodeCache({ stdTTL: 500, checkperiod: 120 });
	}
	async scrap(url: string) {
		try {
			if (await this.isCached(url)) return this.isCached(url)
			const meta_data = await this.getPageMetadata(url)
			const largest_image = await this.getLargestImage(url)
			const payload = { ...meta_data, ...largest_image }
			this.saveToCache(url, payload)
			return payload

		} catch (err) {
			return { error: [{ path: "parseUrl", message: "Unable to parse url" }] }
		}
	}

	private async getLargestImage(url: string) {
		const browser = await this.initPuppeteer();
		const page = await browser.newPage();
		await page.goto(url);
		const largest_image = await page.evaluate(() => {
			return [...document.getElementsByTagName('img')].sort((a, b) => b.naturalWidth * b.naturalHeight - a.naturalWidth * a.naturalHeight)[0].src;
		});
		return { largestImage: largest_image };

	}

	private async getPageMetadata(url: string) {
		const response = await axios.get(url);
		//create a reference to the meta elements
		const $ = load(response.data),
			$title = $('head title').text(),
			$desc = $('meta[name="description"]').attr('content')
		return { title: $title, description: $desc }
	}

	private async isCached(key: string) {
		return this.myCache.get(key)
	}

	private async saveToCache(key: string, payload) {
		return this.myCache.set(key, payload)
	}

	private async initPuppeteer() {
		return await puppeteer.launch()
	}
}
