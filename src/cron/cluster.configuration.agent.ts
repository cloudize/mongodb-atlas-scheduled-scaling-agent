import { isError } from '@cloudize/json';
import { LoggerMessageType } from '@cloudize/logger';
import { IAtlasClusterEndpoint, IClusterConfigurationAgent } from '../interfaces';
import { MongoDBAtlasClusterScalingOptions, MongoDBAtlasClusterUpdateResponse } from '../types';
import AtlasClusterEndpoint from '../atlas-api/atlas.cluster.endpoint.helper';

export default class ClusterConfigurationAgent implements IClusterConfigurationAgent {
  // eslint-disable-next-line class-methods-use-this
  protected InitializeAtlasClusterEndpoint(options: MongoDBAtlasClusterScalingOptions): IAtlasClusterEndpoint {
    return new AtlasClusterEndpoint(options.apikey.private, options.apikey.public, options.projectId);
  }

  async PauseCluster(options: MongoDBAtlasClusterScalingOptions): Promise<void> {
    const cluster: IAtlasClusterEndpoint = this.InitializeAtlasClusterEndpoint(options);

    try {
      const response: MongoDBAtlasClusterUpdateResponse = await cluster.Update(options.clusterName, {
        paused: true,
      });

      if (response.status === 200) {
        await options.logger.Write(
          LoggerMessageType.Info,
          `The pause cluster request to the ${options.clusterName} cluster has been accepted and is in progress.`,
        );
      } else {
        await options.logger.Write(
          LoggerMessageType.Error,
          `The pause cluster request to the ${options.clusterName} cluster was NOT accepted. The response received was:`,
          response,
        );
      }
    } catch (error) {
      if (isError(error)) {
        await options.logger.Write(
          LoggerMessageType.Error,
          `An error occurred. The message was: ${error.message}`,
          error,
        );
      } else {
        await options.logger.Write(
          LoggerMessageType.Error,
          'An unexpected error occurred.',
          error,
        );
      }
    }
  }

  async ResumeCluster(options: MongoDBAtlasClusterScalingOptions): Promise<void> {
    const cluster: IAtlasClusterEndpoint = this.InitializeAtlasClusterEndpoint(options);

    try {
      const response: MongoDBAtlasClusterUpdateResponse = await cluster.Update(options.clusterName, {
        paused: false,
      });

      if (response.status === 200) {
        await options.logger.Write(
          LoggerMessageType.Info,
          `The resume cluster request to the ${options.clusterName} cluster has been accepted and is in progress.`,
        );
      } else {
        await options.logger.Write(
          LoggerMessageType.Error,
          `The resume cluster request to the ${options.clusterName} cluster was NOT accepted. The response received was:`,
          response,
        );
      }
    } catch (error) {
      if (isError(error)) {
        await options.logger.Write(
          LoggerMessageType.Error,
          `An error occurred. The message was: ${error.message}`,
          error,
        );
      } else {
        await options.logger.Write(
          LoggerMessageType.Error,
          'An unexpected error occurred.',
          error,
        );
      }
    }
  }

  async ScaleCluster(options: MongoDBAtlasClusterScalingOptions): Promise<void> {
    const cluster: IAtlasClusterEndpoint = this.InitializeAtlasClusterEndpoint(options);

    try {
      const response: MongoDBAtlasClusterUpdateResponse = await cluster.Update(options.clusterName, {
        name: options.clusterName,
        replicationSpecs: [
          {
            regionConfigs: [
              {
                electableSpecs: {
                  instanceSize: options.instanceSize,
                  nodeCount: options.nodeCount,
                },
                providerName: options.provider,
                regionName: options.regionName,
                priority: 7,
              },
            ],
          },
        ],
      });

      if (response.status === 200) {
        await options.logger.Write(
          LoggerMessageType.Info,
          `The scaling request to the ${options.clusterName} cluster has been accepted and is in progress.`,
        );
      } else {
        await options.logger.Write(
          LoggerMessageType.Error,
          `The scaling request to the ${options.clusterName} cluster was NOT accepted. The response received was:`,
          response,
        );
      }
    } catch (error) {
      if (isError(error)) {
        await options.logger.Write(
          LoggerMessageType.Error,
          `An error occurred. The message was: ${error.message}`,
          error,
        );
      } else {
        await options.logger.Write(
          LoggerMessageType.Error,
          'An unexpected error occurred.',
          error,
        );
      }
    }
  }
}
