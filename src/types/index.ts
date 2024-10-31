import { ILogger } from '@cloudize/logger';

export type CrontabDay = 'Sun' | 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat';
export type CrontabDays = CrontabDay[];

export type MongoDBAtlasAWSInstanceSize = 'M10' | 'M20' | 'M30' | 'M40' | 'M50' | 'M60' | 'M80' | 'M100' | 'M140' | 'M200'
  | 'M300' | 'R40' | 'R50' | 'R60' | 'R80' | 'R200' | 'R300' | 'R400' | 'R700' | 'M40_NVME' | 'M50_NVME' | 'M60_NVME'
  | 'M80_NVME' | 'M200_NVME' | 'M400_NVME';
export type MongoDBAtlasAzureInstanceSize = 'M10' | 'M20' | 'M30' | 'M40' | 'M50' | 'M60' | 'M80' | 'M90' | 'M200' | 'R40'
  | 'R50' | 'R60' | 'R80' | 'R200' | 'R300' | 'R400' | 'M60_NVME' | 'M80_NVME' | 'M200_NVME' | 'M300_NVME' | 'M400_NVME'
  | 'M600_NVME';
export type MongoDBAtlasGCPInstanceSize = 'M10' | 'M20' | 'M30' | 'M40' | 'M50' | 'M60' | 'M80' | 'M140' | 'M200' | 'M250'
  | 'M300' | 'M400' | 'R40' | 'R50' | 'R60' | 'R80' | 'R200' | 'R300' | 'R400' | 'R600';

export type MongoDBAtlasAWSRegion = 'US_GOV_WEST_1' | 'US_GOV_EAST_1' | 'US_EAST_1' | 'US_EAST_2' | 'US_WEST_1'| 'US_WEST_2'
  | 'CA_CENTRAL_1' | 'EU_NORTH_1' | 'EU_WEST_1' | 'EU_WEST_2' | 'EU_WEST_3' | 'EU_CENTRAL_1' | 'EU_CENTRAL_2' | 'AP_EAST_1'
  | 'AP_NORTHEAST_1' | 'AP_NORTHEAST_2' | 'AP_NORTHEAST_3' | 'AP_SOUTHEAST_1' | 'AP_SOUTHEAST_2' | 'AP_SOUTHEAST_3'
  | 'AP_SOUTHEAST_4' | 'AP_SOUTH_1' | 'AP_SOUTH_2' | 'SA_EAST_1' | 'CN_NORTH_1' | 'CN_NORTHWEST_1' | 'ME_SOUTH_1'
  | 'ME_CENTRAL_1' | 'AF_SOUTH_1' | 'EU_SOUTH_1' | 'EU_SOUTH_2' | 'IL_CENTRAL_1' | 'CA_WEST_1' | 'GLOBAL';
export type MongoDBAtlasAzureRegion = 'US_CENTRAL' | 'US_EAST' | 'US_EAST_2' | 'US_NORTH_CENTRAL' | 'US_WEST'
  | 'US_SOUTH_CENTRAL' | 'EUROPE_NORTH' | 'EUROPE_WEST' | 'US_WEST_CENTRAL' | 'US_WEST_2' | 'US_WEST_3' | 'CANADA_EAST'
  | 'CANADA_CENTRAL' | 'BRAZIL_SOUTH' | 'BRAZIL_SOUTHEAST' | 'AUSTRALIA_CENTRAL' | 'AUSTRALIA_CENTRAL_2' | 'AUSTRALIA_EAST'
  | 'AUSTRALIA_SOUTH_EAST' | 'GERMANY_CENTRAL' | 'GERMANY_NORTH_EAST' | 'GERMANY_WEST_CENTRAL' | 'GERMANY_NORTH'
  | 'SWEDEN_CENTRAL' | 'SWEDEN_SOUTH' | 'SWITZERLAND_NORTH' | 'SWITZERLAND_WEST' | 'UK_SOUTH' | 'UK_WEST' | 'NORWAY_EAST'
  | 'NORWAY_WEST' | 'INDIA_CENTRAL' | 'INDIA_SOUTH' | 'INDIA_WEST' | 'CHINA_EAST' | 'CHINA_NORTH' | 'ASIA_EAST' | 'JAPAN_EAST'
  | 'JAPAN_WEST' | 'ASIA_SOUTH_EAST' | 'KOREA_CENTRAL' | 'KOREA_SOUTH' | 'FRANCE_CENTRAL' | 'FRANCE_SOUTH'
  | 'SOUTH_AFRICA_NORTH' | 'SOUTH_AFRICA_WEST' | 'UAE_CENTRAL' | 'UAE_NORTH' | 'QATAR_CENTRAL';
export type MongoDBAtlasGCPRegion = 'EASTERN_US' | 'EASTERN_US_AW' | 'US_EAST_4' | 'US_EAST_4_AW' | 'US_EAST_5'
  | 'US_EAST_5_AW' | 'US_WEST_2' | 'US_WEST_2_AW' | 'US_WEST_3' | 'US_WEST_3_AW' | 'US_WEST_4' | 'US_WEST_4_AW'
  | 'US_SOUTH_1' | 'US_SOUTH_1_AW' | 'CENTRAL_US' | 'CENTRAL_US_AW' | 'WESTERN_US' | 'WESTERN_US_AW'
  | 'NORTH_AMERICA_NORTHEAST_1' | 'NORTH_AMERICA_NORTHEAST_2' | 'SOUTH_AMERICA_EAST_1' | 'SOUTH_AMERICA_WEST_1'
  | 'WESTERN_EUROPE' | 'EUROPE_NORTH_1' | 'EUROPE_WEST_2' | 'EUROPE_WEST_3' | 'EUROPE_WEST_4' | 'EUROPE_WEST_6'
  | 'EUROPE_WEST_8' | 'EUROPE_WEST_9' | 'EUROPE_WEST_10' | 'EUROPE_WEST_12' | 'EUROPE_SOUTHWEST_1' | 'EUROPE_CENTRAL_2'
  | 'MIDDLE_EAST_CENTRAL_1' | 'MIDDLE_EAST_CENTRAL_2' | 'MIDDLE_EAST_WEST_1' | 'AUSTRALIA_SOUTHEAST_1'
  | 'AUSTRALIA_SOUTHEAST_2' | 'EASTERN_ASIA_PACIFIC' | 'NORTHEASTERN_ASIA_PACIFIC' | 'SOUTHEASTERN_ASIA_PACIFIC'
  | 'ASIA_EAST_2' | 'ASIA_NORTHEAST_2' | 'ASIA_NORTHEAST_3' | 'ASIA_SOUTH_1' | 'ASIA_SOUTH_2' | 'ASIA_SOUTHEAST_2';

export type MongoDBAtlasBaseClusterScalingOptions = {
    apikey: {
        private: string;
        public: string;
    };
    logger: ILogger;
    projectId: string;
    clusterName: string;
}

export type MongoDBAtlasAWSProvider = 'AWS';
export type MongoDBAtlasAzureProvider = 'AZURE';
export type MongoDBAtlasGCPProvider = 'GCP';
export type MongoDBAtlasProviders = MongoDBAtlasAWSProvider | MongoDBAtlasAzureProvider | MongoDBAtlasGCPProvider;

export type MongoDBAtlasAWSClusterScalingOptions = MongoDBAtlasBaseClusterScalingOptions & {
    provider: MongoDBAtlasAWSProvider,
    regionName: MongoDBAtlasAWSRegion,
    instanceSize: MongoDBAtlasAWSInstanceSize;
    nodeCount: number,
}

export type MongoDBAtlasAzureClusterScalingOptions = MongoDBAtlasBaseClusterScalingOptions & {
    provider: MongoDBAtlasAzureProvider,
    regionName: MongoDBAtlasAzureRegion,
    instanceSize: MongoDBAtlasAzureInstanceSize;
    nodeCount: number,
}

export type MongoDBAtlasGCPClusterScalingOptions = MongoDBAtlasBaseClusterScalingOptions & {
    provider: MongoDBAtlasGCPProvider,
    regionName: MongoDBAtlasGCPRegion,
    instanceSize: MongoDBAtlasGCPInstanceSize;
    nodeCount: number,
}

export type MongoDBAtlasClusterScalingOptions = MongoDBAtlasAWSClusterScalingOptions
  | MongoDBAtlasAzureClusterScalingOptions
  | MongoDBAtlasGCPClusterScalingOptions;

export type MongoDBAtlasClusterUpdateResponse = {
    status: number;
    [index: string]: any;
}
