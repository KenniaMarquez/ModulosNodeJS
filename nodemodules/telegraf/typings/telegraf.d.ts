/// <reference types="node" />
import * as http from 'http';
import * as tg from './core/types/typegram';
import * as tt from './telegram-types';
import { Composer, MaybePromise } from './composer';
import ApiClient from './core/network/client';
import Context from './context';
import Telegram from './telegram';
import { TlsOptions } from 'tls';
export declare namespace Telegraf {
    interface Options<TContext extends Context> {
        contextType: new (...args: ConstructorParameters<typeof Context>) => TContext;
        handlerTimeout: number;
        telegram?: Partial<ApiClient.Options>;
    }
    interface LaunchOptions {
        dropPendingUpdates?: boolean;
        /** List the types of updates you want your bot to receive */
        allowedUpdates?: tt.UpdateType[];
        /** Configuration options for when the bot is run via webhooks */
        webhook?: {
            /** Public domain for webhook. If domain is not specified, hookPath should contain a domain name as well (not only path component). */
            domain?: string;
            /** Webhook url path; will be automatically generated if not specified */
            hookPath?: string;
            host?: string;
            port?: number;
            /** The fixed IP address which will be used to send webhook requests instead of the IP address resolved through DNS */
            ipAddress?: string;
            /**
             * Maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery, 1-100. Defaults to 40.
             * Use lower values to limit the load on your bot's server, and higher values to increase your bot's throughput.
             */
            maxConnections?: number;
            /** TLS server options. Omit to use http. */
            tlsOptions?: TlsOptions;
            cb?: http.RequestListener;
        };
    }
}
export declare class Telegraf<C extends Context = Context> extends Composer<C> {
    private readonly options;
    private webhookServer?;
    private polling?;
    /** Set manually to avoid implicit `getMe` call in `launch` or `webhookCallback` */
    botInfo?: tg.UserFromGetMe;
    telegram: Telegram;
    readonly context: Partial<C>;
    private handleError;
    constructor(token: string, options?: Partial<Telegraf.Options<C>>);
    private get token();
    /** @deprecated use `ctx.telegram.webhookReply` */
    set webhookReply(webhookReply: boolean);
    get webhookReply(): boolean;
    /**
     * _Override_ error handling
     */
    catch(handler: (err: unknown, ctx: C) => MaybePromise<void>): this;
    webhookCallback(path?: string): (req: http.IncomingMessage & {
        body?: tg.Update | undefined;
    }, res: http.ServerResponse, next?: () => void) => Promise<void>;
    private startPolling;
    private startWebhook;
    secretPathComponent(): string;
    /**
     * @see https://github.com/telegraf/telegraf/discussions/1344#discussioncomment-335700
     */
    launch(config?: Telegraf.LaunchOptions): Promise<void>;
    stop(reason?: string): void;
    private handleUpdates;
    private botInfoCall?;
    handleUpdate(update: tg.Update, webhookResponse?: http.ServerResponse): Promise<void>;
}
//# sourceMappingURL=telegraf.d.ts.map